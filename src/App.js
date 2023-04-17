import "./App.css"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import LinkState from "./context/links/LinkState"
import AddLinks from "./components/AddLinks"
import Profile from "./components/Profile"
import Login from "./components/Login"
import Signup from "./components/Signup"
import NotFound from "./components/NotFound"
import PublicProfile from "./components/PublicProfile"

function App() {
	return (
		<>
			<LinkState>
				<Router>
					<Navbar></Navbar>
					<Routes>
						<Route exact path='/' element={<Profile></Profile>}></Route>
						<Route exact path='/about' element={<About></About>}></Route>
						<Route
							exact
							path='/addnewlink'
							element={<AddLinks></AddLinks>}
						></Route>
						<Route exact path='/profile' element={<Profile></Profile>}></Route>
						<Route exact path='/login' element={<Login></Login>}></Route>
						<Route exact path='/signup' element={<Signup></Signup>}></Route>
						<Route
							exact
							path='/publicprofile'
							element={<PublicProfile></PublicProfile>}
						></Route>
						<Route
							exact
							path='/notfound'
							element={<NotFound></NotFound>}
						></Route>
					</Routes>
				</Router>
			</LinkState>
		</>
	)
}

export default App
