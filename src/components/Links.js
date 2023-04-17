import React, {useEffect, useRef, useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import AddLinks from "./AddLinks"
import ConfirmationModal from "./ConfirmationModal"
import LinksItem from "./LinksItem"
import ShareLink from "./ShareLink"
import UpdateModal from "./UpdateModal"
import {getLinks, deleteLink, editLink} from "../LinksAPI/LinkOperations"
import {
	setAllLinks,
	deleteALinkAction,
	updateLinkAction,
} from "../state/action-creators/actions"
import {useNavigate} from "react-router-dom"

const Links = (props) => {
	const navigate = useNavigate()
	const links = useSelector((state) => state.allLinks.allLinks)
	const dispatch = useDispatch()

	const refUpdateIconClick = useRef(null)
	const refClose = useRef(null)
	const refShare = useRef(null)
	const refUpdate = useRef(null)
	const refConfirmatinoModal = useRef(null)
	const refConfirmationClose = useRef(null)

	const emptyLink = {id: "", title: "", description: "", url: ""}
	var idToDeleteLink = ""

	const [link, setLink] = useState(emptyLink)

	//ROUTE 2: get link by "/api/links/getalllinks"
	const fetchLinks = async () => {
		const allLinks = await getLinks()
		dispatch(setAllLinks(allLinks))
	}

	const handleUpdateClick = async () => {
		if (!link.url.includes("http")) {
			link.url = `http://${link.url}`
		}

		const updatedLink = await editLink(
			link.id,
			link.title,
			link.description,
			link.url
		)
		dispatch(updateLinkAction(link))

		refClose.current.click()
	}

	const handleDeleteLink = (id) => {
		idToDeleteLink = id
		refConfirmatinoModal.current.click()
	}

	const handleConfirmationModalSubmit = async () => {
		if (idToDeleteLink !== "undefined") {
			const deletedLink = await deleteLink(idToDeleteLink)
			dispatch(deleteALinkAction(idToDeleteLink))
			refConfirmationClose.current.click()
		} else {
			alert("Not able to delete this item")
		}
	}
	const handleShareClick = () => {
		refShare.current.click()
	}
	const handleOnChange = (e) => {
		setLink({...link, [e.target.name]: e.target.value})
	}

	useEffect(() => {
		if (!localStorage.getItem("token")) {
			return navigate("/login")
		}

		fetchLinks()

		// eslint-disable-next-line
	}, [])
	const updateLink = (currentLink) => {
		refUpdateIconClick.current.click()
		setLink({
			id: currentLink._id,
			title: currentLink.title,
			description: currentLink.description,
			url: currentLink.url,
		})
	}

	return (
		<>
			<div className='container my-2 justify-content-left'>
				<h3>Below are my links</h3>
				<div className='row'>
					{links &&
						links.map((link) => {
							return (
								<LinksItem
									link={link}
									updateLink={updateLink}
									handleShareClick={handleShareClick}
									handleDeleteLink={handleDeleteLink}
								/>
							)
						})}
				</div>
			</div>
			<ShareLink refShare={refShare}></ShareLink>
			<UpdateModal
				refUpdate={refUpdate}
				refClose={refClose}
				refUpdateIconClick={refUpdateIconClick}
				handleOnChange={handleOnChange}
				handleUpdateClick={handleUpdateClick}
				link={link}
			></UpdateModal>
			<ConfirmationModal
				refConfirmatinoModal={refConfirmatinoModal}
				handleConfirmationModalSubmit={handleConfirmationModalSubmit}
				refConfirmationClose={refConfirmationClose}
			></ConfirmationModal>
		</>
	)
}

export default Links
