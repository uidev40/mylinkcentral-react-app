import {ActionTypes} from "../constants/action-types"
const initialState = {
	user: [],
	LoggedIn: false,
	LoggedOut: true,
	IsAutorized: false,
	authToken: "",
}
const userReducer = (state = initialState, {type, payload}) => {
	switch (type) {
		case ActionTypes.CREATE_USER:
			return {...state, user: payload}
		case ActionTypes.LOGIN_USER:
			return {
				...state,
				LoggedIn: true,
				LoggedOut: false,
				IsAutorized: true,
				authToken: payload,
			}
		case ActionTypes.LOGGED_OUT:
			return {
				...state,
				LoggedIn: false,
				LoggedOut: true,
				IsAutorized: false,
				authToken: "",
				user: payload,
			}
		case ActionTypes.GET_USER:
			return {
				...state,
				user: payload,
			}

		default:
			return state
	}
}
export default userReducer
