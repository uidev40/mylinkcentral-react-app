import React, {useEffect, useState} from "react"
import {useNavigate, useParams} from "react-router-dom"
import {getUserProfile, getUserByUserName} from "../LinksAPI/UserOperations"
import {getPublicLinks} from "../LinksAPI/LinkOperations"
import PublicLinks from "./PublicLinks"

const Home = () => {
	const params = {}
	console.log("window.location.search", window.location.search)
	window.location.search
		.substring(1)
		.split("&")
		.forEach((pair) => {
			const [key, value] = pair.split("=")
			params[key] = decodeURIComponent(value)
		})
	const u = params.u
	console.log("logs the value of the 'u' parameter", u) // logs the value of the 'id' parameter

	const navigate = useNavigate()
	const [profile, setProfile] = useState([])
	const [links, setLinks] = useState([])
	const [user, setUser] = useState([])

	const fetchProfile = async () => {
		const result = await getUserByUserName(u)
		console.log("result.user", result.success)
		if (result.success) {
			const {user, profile, links} = result

			setUser({
				name: user.name,
				email: user.email,
				username: user.username,
			})

			setProfile({
				name: profile[0].name,
				email: profile[0].email,
				username: profile[0].username,
			})
			setLinks(links)

			console.log("Profile: ", profile)
			console.log("links: ", links)
		} else {
			navigate("/notfound")
		}
	}

	useEffect(() => {
		fetchProfile()
	}, [])
	return (
		<>
			<div className='container mt-5'>
				<div className='row d-flex justify-content-center'>
					<div className='col-md-6'>
						<div className='card p-3 py-4'>
							<div className='text-center'>
								<img
									src='https://i.imgur.com/bDLhJiP.jpg'
									width='100'
									className='rounded-circle'
									alt='demo'
								/>
							</div>

							<div className='text-center mt-3'>
								{profile.name !== "" && (
									<span className='bg-secondary p-1 px-4 rounded text-white'>
										{profile.name}
									</span>
								)}
								<h5 className='mt-2 mb-0'>{profile.email}</h5>
								<span>{profile.professionalTitle}</span>

								<div className='px-4 mt-1'>
									<p className='fonts'>{profile.description} </p>
								</div>

								{links &&
									links.map((link) => {
										return (
											link.public && <PublicLinks link={link}></PublicLinks>
										)
									})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home
