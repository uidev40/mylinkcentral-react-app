import {combineReducers} from "redux"
import linkReducer from "./linkReducer"
import userReducer from "./userReduce"

const reducers = combineReducers({
	allLinks: linkReducer,
	user: userReducer,
})

export default reducers
