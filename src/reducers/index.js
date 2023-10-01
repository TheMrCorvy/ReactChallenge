import { combineReducers } from "redux"
import drawerReducer from "./drawerReducer"
import calendarReducer from "./calendarReducer"
import dialogReducer from "./dialogReducer"

const reducers = {
	open: drawerReducer,
	calendar: calendarReducer,
	dialog: dialogReducer,
}

export default combineReducers(reducers)
