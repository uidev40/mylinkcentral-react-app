import {ActionTypes} from "../constants/action-types"

//const host = "http://localhost:5000"
const initialState = {
	allLinks: [],
}
const linkReducer = (state = initialState, {type, payload}) => {
	switch (type) {
		case ActionTypes.SET_ALL_LINKS:
			return {...state, allLinks: payload}
		case ActionTypes.ADD_NEW_LINK:
			return {...state, allLinks: state.allLinks.concat(payload)}
		case ActionTypes.DELETE_A_LINK:
			var currentLinks = JSON.parse(JSON.stringify(state.allLinks))
			const linksAfterDelete = currentLinks.filter(
				(link) => link._id !== payload
			)
			return {
				...state,
				allLinks: linksAfterDelete,
			}
		case ActionTypes.UPDATE_A_LINK:
			currentLinks = JSON.parse(JSON.stringify(state.allLinks))

			for (let index = 0; index < currentLinks.length; index++) {
				const element = currentLinks[index]
				if (element._id === payload.id) {
					currentLinks[index].title = payload.title
					currentLinks[index].description = payload.description
					currentLinks[index].url = payload.url
					break
				}
			}

			return {
				...state,
				allLinks: currentLinks,
			}
		case ActionTypes.UPDATE_PUBLIC_FLAG:
			currentLinks = JSON.parse(JSON.stringify(state.allLinks))

			for (let index = 0; index < currentLinks.length; index++) {
				const element = currentLinks[index]
				if (element._id === payload._id) {
					currentLinks[index].public = payload.public
					break
				}
			}

			return {
				...state,
				allLinks: currentLinks,
			}

		default:
			return state
	}
}
export default linkReducer
