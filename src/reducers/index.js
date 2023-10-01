import { combineReducers } from "redux"
import drawerReducer from "./drawerReducer"
import calendarReducer from "./calendarReducer"

const reducers = {
	open: drawerReducer,
	calendar: calendarReducer,
}

export default combineReducers(reducers)
