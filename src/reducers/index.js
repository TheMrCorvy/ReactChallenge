import { combineReducers } from "redux"
import drawerReducer from "./drawerReducer"
import calendarReducer from "./calendarReducer"
import dialogReducer from "./dialogReducer"

const reducers = {
	open: drawerReducer,
	calendar: calendarReducer,
	dialogIsOpen: dialogReducer,
}

export default combineReducers(reducers)
