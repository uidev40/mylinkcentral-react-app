import React from "react"
import {useDispatch} from "react-redux"
import {updatePublicFlag} from "../LinksAPI/LinkOperations"
import {actionCreators} from "../state/action-creators/index"
import {bindActionCreators} from "@reduxjs/toolkit"

const LinksItem = (props) => {
	const {link, updateLink, handleDeleteLink} = props
	const dispatch = useDispatch()
	const {updatePublicFlagAction} = bindActionCreators(actionCreators, dispatch)

	const handleShowHideToggles = async (id) => {
		const updatedLink = await updatePublicFlag(id)
		dispatch(updatePublicFlagAction(updatedLink))
	}

	return (
		<>
			<div className='col-sm-6 my-2 justify-content-left' key={link.id}>
				<div className='card'>
					<div className='card-body'>
						{link.description !== null ? (
							<h5 className='card-title'>{link.description}</h5>
						) : (
							""
						)}
						<a
							rel='noreferrer'
							target='_blank'
							href={link.url}
							className='btn btn-dark my-2'
						>
							{link.title}
						</a>
						<i
							className='fa-solid fa-pen-to-square mx-3'
							onClick={() => updateLink(link)}
						></i>
						<i
							className='fa-solid fa-trash'
							onClick={() => handleDeleteLink(link._id)}
						></i>

						{/* <i
							className='fa-regular fa-share-nodes mx-2'
							onClick={() => handleShareClick()}
						></i> */}
					</div>
					<div className='d-flex justify-content-left'>
						<div className='card-body '>
							<div className='form-check form-switch'>
								<label
									className='form-check-label'
									htmlFor='flexSwitchCheckChecked'
								>
									<input
										className='form-check-input'
										type='checkbox'
										role='switch'
										id='flexSwitchCheckChecked'
										onChange={() => handleShowHideToggles(link._id)}
										checked={link.public}
									/>
									{link.public ? "Public" : "Private"}
								</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default LinksItem
