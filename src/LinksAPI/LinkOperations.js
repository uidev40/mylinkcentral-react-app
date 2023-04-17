const host = "http://localhost:5000"

//ROUTE 1: get link by "/api/links/getalllinks"
async function getLinks() {
	const response = await fetch(`${host}/api/links/getalllinks`, {
		method: "GET", // *GET, POST, PUT, DELETE, etc.
		headers: {
			"Content-Type": "application/json",
			"auth-token": localStorage.getItem("token"),
		},
	})
	const json = await response.json() // parses JSON response into native JavaScript objects
	return json
}

//ROUTE 1: add new link by "/api/links/addlink"
async function addNewLink(title, description, url, iconname) {
	const response = await fetch(`${host}/api/links/addlink`, {
		method: "POST", // *GET, POST, PUT, DELETE, etc.
		headers: {
			"Content-Type": "application/json",
			"auth-token": localStorage.getItem("token"),
		},
		body: JSON.stringify({title, description, url, iconname}), // body data type must match "Content-Type" header
	})

	const newLink = await response.json()
	return newLink
}

//Delete a Link
///api/links/deletelink/63e748c671a0b79d000b5e11
async function deleteLink(id) {
	const response = await fetch(`${host}/api/links/deletelink/${id}`, {
		method: "DELETE", // *GET, POST, PUT, DELETE, etc.
		headers: {
			"Content-Type": "application/json",
			"auth-token": localStorage.getItem("token"),
		},
	})

	return await response.json
}

//Edit a Link
async function editLink(id, title, description, url) {
	const response = await fetch(`${host}/api/links/updatelink/${id}`, {
		method: "PUT", // *GET, POST, PUT, DELETE, etc.
		headers: {
			"Content-Type": "application/json",
			"auth-token": localStorage.getItem("token"),
		},
		body: JSON.stringify({title, description, url}), // body data type must match "Content-Type" header
	})
	return await response.json()
}

async function updatePublicFlag(id) {
	const response = await fetch(`${host}/api/links/updateflag/${id}`, {
		method: "PUT", // *GET, POST, PUT, DELETE, etc.
		headers: {
			"Content-Type": "application/json",
			"auth-token": localStorage.getItem("token"),
		},
		//body: JSON.stringify({title, description, url}), // body data type must match "Content-Type" header
	})

	const updatedLink = await response.json()
	return updatedLink
}

async function getPublicLinks(username) {
	const response = await fetch(
		`${host}/api/profiles/getpubliclinks/${username}`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"auth-token": localStorage.getItem("token"),
			},
			//body: JSON.stringify({username}), // body data type must match "Content-Type" header
		}
	)
	const json = await response.json() // parses JSON response into native JavaScript objects
	return json
}

//updateflag

export {
	addNewLink,
	getLinks,
	deleteLink,
	editLink,
	updatePublicFlag,
	getPublicLinks,
}
