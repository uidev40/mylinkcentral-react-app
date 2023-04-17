import {applyMiddleware, legacy_createStore as createStore} from "redux"
import thunk from "redux-thunk"
import reducer from "./reducers"
import {composeWithDevTools} from "redux-devtools-extension"

const store = createStore(
	reducer,
	composeWithDevTools(
		applyMiddleware(thunk)
		// other store enhancers if any
	)
)
export default store
