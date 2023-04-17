const host = "http://localhost:5000"

//ROUTE 1: get link by "/api/links/getalllinks"
async function userSignUp(name, email, username, password) {
	const response = await fetch(`${host}/api/auth/createuser`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			name: name,
			email: email,
			username: username,
			password: password,
		}), // body data type must match "Content-Type" header
	})
	return await response.json()
}

async function checkUniqueUserName(username) {
	const response = await fetch(`${host}/api/auth/checkusername`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			username: username,
		}), // body data type must match "Content-Type" header
	})
	return await response.json()
}

async function checkUniqueEmail(email) {
	const response = await fetch(`${host}/api/auth/checkemail`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			email: email,
		}), // body data type must match "Content-Type" header
	})
	return await response.json()
}

async function getUserProfile() {
	const response = await fetch(`${host}/api/profiles/getprofile`, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
			"auth-token": localStorage.getItem("token"),
		},
	})
	return await response.json()
}

async function getUserByUserName(username) {
	const response = await fetch(
		`${host}/api/profiles/getpublicprofile/${username}`,
		{
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				"auth-token": localStorage.getItem("token"),
			},
		}
	)
	return await response.json()
}
//getUserProfile()

export {
	userSignUp,
	checkUniqueUserName,
	getUserProfile,
	getUserByUserName,
	checkUniqueEmail,
}
