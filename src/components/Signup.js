import React, {useEffect, useState} from "react"
import {Link, useNavigate} from "react-router-dom"
import {userSignUp, checkUniqueUserName} from "../LinksAPI/UserOperations"

const host = "http://localhost:5000"
var isEmailExist = false
var isUserNameExist = true

const Signup = (props) => {
	const navigate = useNavigate()
	const [register, setRegister] = useState({
		name: "",
		email: "",
		username: "",
		password: "",
	})

	const [userNameExist, setUserNameExist] = useState(true)

	const onChange = (e) => {
		setRegister({...register, [e.target.name]: e.target.value})
		console.log(register)
	}
	const handleSubmit = async (e) => {
		e.preventDefault()
		const result = await userSignUp(
			register.name,
			register.email,
			register.username,
			register.password
		)
		// parses JSON response into native JavaScript objects
		if (result.success) {
			//console.log(json)
			navigate("/login")
		} else {
			console.log(result.errors.message)
			//alert(json)
		}
	}

	const onBlurUserName = async () => {
		const result = await checkUniqueUserName(register.username) // parses JSON response into native JavaScript objects
		if (result.success) {
			setUserNameExist(result.success)
			console.log("isUserNameExist: ", userNameExist)
		} else {
			setUserNameExist(result.success)
			console.log("isUserNameExist: ", userNameExist)
		}
	}

	return (
		<section className='vh-100 mt-5'>
			<div className='container h-100'>
				<div className='row d-flex justify-content-center  h-100'>
					<div className='col-lg-12 col-xl-6'>
						<div className='card text-black' style={{borderRadius: "25px"}}>
							<div className='card-body p-md-5'>
								<div className='row justify-content-center'>
									<div>
										<div className='col-md-10 col-lg-6 col-xl-10 order-2 order-lg-1'>
											<p className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>
												Sign up
											</p>
											<form className='mx-1 mx-md-4' onSubmit={handleSubmit}>
												<div className='d-flex flex-row align-items-center mb-4'>
													<i className='fas fa-user fa-lg me-3 fa-fw'></i>
													<div className='form-outline flex-fill mb-0'>
														<label
															className='form-label'
															htmlFor='form3Example1c'
														>
															Your Name
														</label>
														<input
															type='text'
															id='name'
															name='name'
															className='form-control'
															onChange={onChange}
															required
														/>
													</div>
												</div>

												<div className='d-flex flex-row align-items-center mb-4'>
													<i className='fas fa-envelope fa-lg me-3 fa-fw'></i>
													<div className='form-outline flex-fill mb-0'>
														<label
															className='form-label'
															htmlFor='form3Example3c'
														>
															Your Email
														</label>
														<input
															type='email'
															id='email'
															name='email'
															className='form-control'
															onChange={onChange}
															required
														/>
													</div>
												</div>
												<div className='d-flex flex-row align-items-center mb-4'>
													<i className='fas fa-user fa-lg me-3 fa-fw'></i>
													<div className='form-outline flex-fill mb-0'>
														<label
															className='form-label'
															htmlFor='form3Example1c'
														>
															Username
														</label>
														<input
															type='text'
															id='username'
															name='username'
															className='form-control'
															onChange={onChange}
															onBlur={onBlurUserName}
															required
														/>
														{!userNameExist && (
															<label className='my-2' style={{color: "red"}}>
																"{register.username}" username already exist!
															</label>
														)}
													</div>
												</div>

												<div className='d-flex flex-row align-items-center mb-4'>
													<i className='fas fa-lock fa-lg me-3 fa-fw'></i>
													<div className='form-outline flex-fill mb-0'>
														<label
															className='form-label'
															htmlFor='form3Example4c'
														>
															Password
														</label>
														<input
															type='password'
															id='password'
															name='password'
															className='form-control'
															onChange={onChange}
															required
														/>
													</div>
												</div>

												<div className='d-flex justify-content-center mx-4 mb-3 mb-lg-4'>
													<button
														type='submit'
														className='btn btn-primary btn-lg'
														disabled={
															register.name.length < 3 ||
															register.email.length < 4 ||
															register.username.length < 4 ||
															register.password.length < 5 ||
															!userNameExist
														}
													>
														Register
													</button>
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Signup
