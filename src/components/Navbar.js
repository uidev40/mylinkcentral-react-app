import React from "react"
import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom"
import {actionCreators} from "../state/action-creators/index"
import {bindActionCreators} from "@reduxjs/toolkit"
import {useDispatch} from "react-redux"

const Navbar = () => {
	const dispatch = useDispatch()
	const {loggedOutUserAction} = bindActionCreators(actionCreators, dispatch)

	const navigate = useNavigate()
	const isLoggedIn = localStorage.getItem("token")
	const handleLogout = () => {
		dispatch(loggedOutUserAction(null))
		localStorage.clear()
		navigate("/login")
	}
	return (
		<>
			<nav className='navbar navbar-expand-lg navbar-light bg-light'>
				<div className='container-fluid'>
					<Link className='navbar-brand' to='/'>
						My Link Central
					</Link>
					<button
						className='navbar-toggler'
						type='button'
						data-bs-toggle='collapse'
						data-bs-target='#navbarSupportedContent'
						aria-controls='navbarSupportedContent'
						aria-expanded='false'
						aria-label='Toggle navigation'
					>
						<span className='navbar-toggler-icon'></span>
					</button>
					<div className='collapse navbar-collapse' id='navbarSupportedContent'>
						<ul className='navbar-nav me-auto mb-2 mb-lg-0'>
							{/* <li className='nav-item'>
								<Link className='nav-link' to='/'>
									Home
								</Link>
							</li> */}
							<Link className='nav-link mx-2' to='/profile'>
								Profile
							</Link>
							<li className='nav-item'>
								<Link className='nav-link' to='/about'>
									About
								</Link>
							</li>
							{/* <li className='nav-item'>
								<Link className='nav-link' to='/addnewlink'>
									Add New Link
								</Link>
							</li> */}
						</ul>

						{!isLoggedIn && (
							<Link className='nav-link mx-2' to='/login'>
								Login
							</Link>
						)}
						{!isLoggedIn && (
							<Link className='nav-link mx-2' to='/signup'>
								SignUp
							</Link>
						)}
						{isLoggedIn && (
							<a
								className='nav-link mx-2'
								style={{cursor: "pointer"}}
								onClick={handleLogout}
							>
								Logout
							</a>
						)}
					</div>
				</div>
			</nav>
		</>
	)
}

export default Navbar
