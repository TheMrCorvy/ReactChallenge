import {
	MOVE_TO_NEXT_MONTH,
	MOVE_TO_PREVIOUS_MONTH,
	RETURN_TO_CURRENT_DATE,
	UPDATE_CALENDAR,
} from "../actions/calendarActions"

const currentDate = new Date()

const initialState = {
	currentDate,
	currentMonth: currentDate.getMonth(),
	currentYear: currentDate.getFullYear(),
	eventData: null,
}

const calendarReducer = (state = initialState, action) => {
	let newDate
	let newMonth
	let newYear
	switch (action.type) {
		case MOVE_TO_PREVIOUS_MONTH:
			newMonth = state.currentMonth - 1 < 0 ? 11 : state.currentMonth - 1
			newYear = newMonth === 11 ? state.currentYear - 1 : state.currentYear
			newDate = new Date(newYear, newMonth, 1)

			return {
				...state,
				currentDate: newDate,
				currentMonth: newMonth,
				currentYear: newYear,
			}

		case MOVE_TO_NEXT_MONTH:
			newMonth = state.currentMonth + 1 > 11 ? 0 : state.currentMonth + 1
			newYear = newMonth === 0 ? state.currentYear + 1 : state.currentYear
			newDate = new Date(newYear, newMonth, 1)

			return {
				...state,
				currentDate: newDate,
				currentMonth: newMonth,
				currentYear: newYear,
			}

		case UPDATE_CALENDAR:
			return {
				...state,
				eventData: action.payload,
			}

		case RETURN_TO_CURRENT_DATE:
			newDate = new Date()

			return {
				...state,
				currentDate: newDate,
				curentMonth: newDate.getMonth(),
				currentYear: newDate.getFullYear(),
			}

		default:
			return {
				...state,
			}
	}
}

export default calendarReducer
