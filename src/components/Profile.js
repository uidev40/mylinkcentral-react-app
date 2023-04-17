import React, {useEffect, useState} from "react"
import {useNavigate} from "react-router-dom"
import Links from "./Links"
import {
	getUserProfile,
	checkUniqueUserName,
	checkUniqueEmail,
} from "../LinksAPI/UserOperations"
import AddLinks from "./AddLinks"

const Profile = () => {
	const [profile, setProfile] = useState([])
	const [userNameExist, setUserNameExist] = useState(true)
	const [emailExist, setEmailExist] = useState(true)
	const [disabled, setDisabled] = useState(true)

	const fetchProfile = async () => {
		const result = await getUserProfile()
		setProfile({
			name: result.name,
			email: result.email,
			username: result.username,
		})

		console.log("Profile: ", profile)
	}
	const onChange = (e) => {
		setProfile({...profile, [e.target.name]: e.target.value})
		console.log(profile)
	}

	const navigate = useNavigate()
	useEffect(() => {
		if (!localStorage.getItem("token")) {
			return navigate("/login")
		}

		fetchProfile()
	}, [])

	const handlePublicProfileButton = () => {
		navigate("/publicprofile?u=" + profile.username)
	}
	const handleEditProfileButton = () => {
		setDisabled(false)
	}
	const handleEditCancelButton = () => {
		setDisabled(true)
		setUserNameExist(true)
		setEmailExist(true)
	}
	const onBlurUserName = async () => {
		var result = await checkUniqueUserName(profile.username) // parses JSON response into native JavaScript objects
		if (result.success) {
			setUserNameExist(result.success)
		} else {
			setUserNameExist(result.success)
		}
	}

	const onBlurEmail = async () => {
		var result = await checkUniqueEmail(profile.email) // parses JSON response into native JavaScript objects
		if (result.success) {
			setEmailExist(result.success)
		} else {
			setEmailExist(result.success)
		}
	}

	return (
		<>
			<div className='container mt-5'>
				<div className='row d-flex justify-content-center'>
					<div className='col-md-8 '>
						<div className='card p-3 py-4'>
							<div className='row d-flex'>
								<div className='col-md-8'>
									<div className='mb-3 row'>
										<label
											htmlFor='username'
											className='col-sm-4 col-form-label'
										>
											User name
										</label>
										<div className='col-sm-5'>
											<input
												type='text'
												className='form-control'
												id='username'
												name='username'
												onChange={onChange}
												value={profile.username}
												onBlur={onBlurUserName}
												disabled={disabled}
											/>
											{!userNameExist && (
												<label className='my-2' style={{color: "red"}}>
													"{profile.username}" username already exist!
												</label>
											)}
										</div>
									</div>
									<div className='mb-3 row'>
										<label htmlFor='name' className='col-sm-4 col-form-label'>
											Name
										</label>
										<div className='col-sm-5'>
											<input
												type='text'
												className='form-control'
												id='name'
												onChange={onChange}
												value={profile.name}
												disabled={disabled}
											/>
										</div>
									</div>
									<div className='mb-3 row'>
										<label
											htmlFor='staticEmail'
											className='col-sm-4 col-form-label'
										>
											Email
										</label>
										<div className='col-sm-5'>
											<input
												type='text'
												className='form-control'
												id='staticEmail'
												onChange={onChange}
												value={profile.email}
												disabled={disabled}
												onBlur={onBlurEmail}
											/>
											{!emailExist && (
												<label className='my-2' style={{color: "red"}}>
													"{profile.email}" email already exist!
												</label>
											)}
										</div>
									</div>
									<div className='mb-3 row'>
										<label
											htmlFor='description'
											className='col-sm-4 col-form-label'
										>
											Description
										</label>
										<div className='col-sm-5'>
											<textarea
												type='text'
												className='form-control'
												id='description'
												onChange={onChange}
												disabled={disabled}
											/>
										</div>
									</div>
									<div className='mb-3 row'>
										<label
											htmlFor='ptittle'
											className='col-sm-4 col-form-label'
										>
											Professional Title
										</label>
										<div className='col-sm-5'>
											<input
												type='text'
												className='form-control'
												id='ptittle'
												onChange={onChange}
												disabled={disabled}
											/>
										</div>
									</div>
									{!disabled && (
										<div className='mb-3 row'>
											<label
												htmlFor='ptittle'
												className='col-sm-4 col-form-label'
											></label>
											<div className='col-sm-5'>
												<a target='_blank' className='btn btn-primary my-3 '>
													Save
												</a>
												<a
													target='_blank'
													className='btn btn-light my-3 mx-3'
													onClick={handleEditCancelButton}
												>
													Cancel
												</a>
											</div>
										</div>
									)}
								</div>

								<div className='col-md-3 mt-5 justify-content-center'>
									<img
										src='https://i.imgur.com/bDLhJiP.jpg'
										width='100'
										className='rounded-circle'
										alt='demo'
									/>
									<i
										className='fa-solid fa-pen-to-square mx-3'
										onClick={handleEditProfileButton}
									></i>
									{/* <i class='fa-sharp fa-solid fa-floppy-disk'></i> */}
									<a
										target='_blank'
										className='btn btn-dark my-3'
										onClick={handlePublicProfileButton}
									>
										Public profile
									</a>

									{/* <img src='...' className='img-thumbnail' alt='...'></img> */}
								</div>
							</div>
							<AddLinks></AddLinks>
							<Links></Links>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Profile
