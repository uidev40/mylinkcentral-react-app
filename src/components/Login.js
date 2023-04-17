import React, {useState} from "react"
import {useNavigate} from "react-router-dom"
import {actionCreators} from "../state/action-creators/index"
import {bindActionCreators} from "@reduxjs/toolkit"
import {useDispatch} from "react-redux"
import {
	GoogleLogin,
	useGoogleLogin,
	GoogleOAuthProvider,
} from "@react-oauth/google"
import {getGoogleUrl} from "../utils/getGoogleUrl"

const host = "http://localhost:5000"
const clientId =
	"113915349099-mji27dv6kp5faoedgvmsd5sjhqbhmo1t.apps.googleusercontent.com"
const Login = (props) => {
	const dispatch = useDispatch()
	const {loginUserAction} = bindActionCreators(actionCreators, dispatch)

	const navigate = useNavigate()
	const [credencials, setCredencials] = useState({email: "", password: ""})

	const onChange = (e) => {
		setCredencials({...credencials, [e.target.name]: e.target.value})
		//console.log(credencials)
	}
	const login = useGoogleLogin({
		flow: "auth-code",
		onSuccess: async (codeResponse) => {
			console.log(codeResponse)

			const tokens = await await fetch(`${host}/api/auth/google`, {
				method: "POST", // *GET, POST, PUT, DELETE, etc.
				headers: {
					"Content-Type": "application/json",
				},
				// body: JSON.stringify({
				// 	email: credencials.email,
				// 	password: credencials.password,
				// }), // body data type must match "Content-Type" header
			})

			console.log(tokens)
		},
		onError: (errorResponse) => console.log(errorResponse),
	})
	const handleSubmit = async (e) => {
		e.preventDefault()
		//console.log("handleLoginSubmit")

		const response = await fetch(`${host}/api/auth/login`, {
			method: "POST", // *GET, POST, PUT, DELETE, etc.
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: credencials.email,
				password: credencials.password,
			}), // body data type must match "Content-Type" header
		})
		const json = await response.json() // parses JSON response into native JavaScript objects
		if (json.success) {
			localStorage.setItem("token", json.authToken)
			dispatch(loginUserAction(json.authToken))
			navigate("/profile")
		} else {
		}
	}

	const hangeleOAuthButton = () => {
		console.log(getGoogleUrl(""))
	}
	const handleSignUpButton = () => {
		navigate("/signup")
	}

	return (
		<section className='vh-100 mt-5'>
			<div className='container h-100'>
				<div className='row d-flex justify-content-center h-100'>
					<div className='col-lg-6 col-xl-6'>
						<div className='card text-black' style={{borderRadius: "25px"}}>
							<div className='card-body p-md-5'>
								<div className='row justify-content-center'>
									<div className='col-md-10 col-lg-3 col-xl-10 order-2 order-lg-1'>
										<p className='text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4'>
											Login
										</p>
										<form onSubmit={handleSubmit}>
											<div className='mb-3'>
												<label htmlFor='email' className='form-label'>
													Email address
												</label>
												<input
													type='email'
													className='form-control'
													id='email'
													name='email'
													aria-describedby='emailHelp'
													onChange={onChange}
													value={credencials.email}
													required
												/>
												<div id='emailHelp' className='form-text'>
													We'll never share your email with anyone else.
												</div>
											</div>
											<div className='mb-3'>
												<label htmlFor='password' className='form-label'>
													Password
												</label>
												<input
													type='password'
													className='form-control'
													id='password'
													name='password'
													onChange={onChange}
													value={credencials.password}
													required
												/>
											</div>
											<div className='d-flex justify-content-center mx-4 mb-3 mb-lg-4'>
												<button
													type='submit'
													className='btn btn-primary btn-lg'
												>
													Login
												</button>
												<button
													type='submit'
													className='btn btn-primary btn-lg mx-2'
													onClick={handleSignUpButton}
												>
													SignUp
												</button>
											</div>
										</form>
										<button
											className='btn btn-light d-none'
											onClick={() => login()}
										>
											Sign in with Google 🚀{" "}
										</button>
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

export default Login
