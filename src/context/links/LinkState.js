import {useRef, useState} from "react"
import LinksContext from "./linksContext"

const host = "http://localhost:5000"
const LinkState = (props) => {
	const [links, setLinks] = useState(null)
	const refConfirmationClose = useRef(null)
	const refConfirmatinoModal = useRef(null)

	//ROUTE 1: get link by "/api/links/getalllinks"
	const getLinks = async (props) => {
		const response = await fetch(`${host}/api/links/getalllinks`, {
			method: "GET", // *GET, POST, PUT, DELETE, etc.
			headers: {
				"Content-Type": "application/json",
				//"auth-token": localStorage.getItem("token"),
			},
		})
		const json = await response.json() // parses JSON response into native JavaScript objects

		console.log("From getLinks data: " + json)
		setLinks(json)
	}

	//ROUTE 1: add new link by "/api/links/addlink"
	const addNewLink = async (title, description, url, iconname) => {
		//TODO : add API call
		console.log("indie addNewLink LinkState.js: before req")
		const response = await fetch(`${host}/api/links/addlink`, {
			method: "POST", // *GET, POST, PUT, DELETE, etc.
			headers: {
				"Content-Type": "application/json",
				//"auth-token": localStorage.getItem("token"),
			},
			body: JSON.stringify({title, description, url, iconname}), // body data type must match "Content-Type" header
		})

		const newLink = await response.json()
		console.log("indie addNewLink LinkState.js: after req")

		setLinks(links.concat(newLink))
		//showAlert("Link added!", "success")
	}

	//Delete a Link
	///api/links/deletelink/63e748c671a0b79d000b5e11
	const deleteLink = async (id) => {
		const response = await fetch(`${host}/api/links/deletelink/${id}`, {
			method: "DELETE", // *GET, POST, PUT, DELETE, etc.
			headers: {
				"Content-Type": "application/json",
				//"auth-token": localStorage.getItem("token"),
			},
		})

		const allLinks = await JSON.parse(JSON.stringify(links))
		const linksAfterDelete = allLinks.filter((link) => link._id !== id)
		setLinks(linksAfterDelete)
		//showAlert("Link deleted!", "success")
	}

	//Edit a Link
	const editLink = async (id, title, description, url) => {
		///api/links/updatelink/63e748b371a0b79d000b5e0d
		const response = await fetch(`${host}/api/links/updatelink/${id}`, {
			method: "PUT", // *GET, POST, PUT, DELETE, etc.
			headers: {
				"Content-Type": "application/json",
				//"auth-token": localStorage.getItem("token"),
			},
			//body: JSON.stringify(note.title, note.description, note.tag), // body data type must match "Content-Type" header
			body: JSON.stringify({title, description, url}), // body data type must match "Content-Type" header
		})
		console.log(response.json)
		const newLinks = await JSON.parse(JSON.stringify(links))

		console.log("before edit new links: " + newLinks)
		for (let index = 0; index < newLinks.length; index++) {
			const element = newLinks[index]
			if (element._id === id) {
				newLinks[index].title = title
				newLinks[index].description = description
				newLinks[index].url = url
				break
			}
		}

		setLinks(newLinks)
	}

	return (
		<LinksContext.Provider
			value={{
				links,
				getLinks,
				addNewLink,
				deleteLink,
				editLink,
				refConfirmationClose,
				refConfirmatinoModal,
			}}
		>
			{props.children}
		</LinksContext.Provider>
	)
}

export default LinkState
