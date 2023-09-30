import { combineReducers } from "redux"
import drawerReducer from "./drawerReducer"

const reducers = {
	open: drawerReducer,
}

export default combineReducers(reducers)
