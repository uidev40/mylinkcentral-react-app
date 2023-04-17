import {ActionTypes} from "../constants/action-types"

export const setAllLinks = (allLinks) => {
	return {
		type: ActionTypes.SET_ALL_LINKS,
		payload: allLinks,
	}
}

export const addNewLinkAction = (link) => {
	return {
		type: ActionTypes.ADD_NEW_LINK,
		payload: link,
	}
}
export const deleteALinkAction = (id) => {
	return {
		type: ActionTypes.DELETE_A_LINK,
		payload: id,
	}
}
export const updateLinkAction = (link) => {
	return {
		type: ActionTypes.UPDATE_A_LINK,
		payload: link,
	}
}
export const updatePublicFlagAction = (link) => {
	return {
		type: ActionTypes.UPDATE_PUBLIC_FLAG,
		payload: link,
	}
}
export const creatUserAction = (user) => {
	return {
		type: ActionTypes.CREATE_USER,
		payload: user,
	}
}
export const loginUserAction = (token) => {
	return {
		type: ActionTypes.LOGIN_USER,
		payload: token,
	}
}

export const loggedOutUserAction = (user) => {
	return {
		type: ActionTypes.LOGGED_OUT,
		payload: user,
	}
}
export const getUserAction = (user) => {
	return {
		type: ActionTypes.GET_USER,
		payload: user,
	}
}
