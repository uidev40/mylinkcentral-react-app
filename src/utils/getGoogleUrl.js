import React from "react"

export const getGoogleUrl = (from) => {
	const rootUrl = `https://accounts.google.com/o/oauth2/v2/auth`

	const options = {
		redirect_uri: "http://localhost:8000/api/sessions/oauth/google",
		client_id:
			"113915349099-mji27dv6kp5faoedgvmsd5sjhqbhmo1t.apps.googleusercontent.com",
		access_type: "offline",
		response_type: "code",
		prompt: "consent",
		scope: [
			"https://www.googleapis.com/auth/userinfo.profile",
			"https://www.googleapis.com/auth/userinfo.email",
		].join(" "),
		state: from,
	}
	console.log(options)
	const qs = new URLSearchParams(options)

	return `${rootUrl}?${qs.toString()}`
}
