export const MOVE_TO_NEXT_MONTH = "MOVE_TO_NEXT_MONTH"
export const MOVE_TO_PREVIOUS_MONTH = "MOVE_TO_PREVIOUS_MONTH"
export const UPDATE_CALENDAR = "UPDATE_CALENDAR"
export const RETURN_TO_CURRENT_DATE = "RETURN_TO_CURRENT_DATE"

export const moveToNextMonth = () => {
	return {
		type: MOVE_TO_NEXT_MONTH,
	}
}
export const moveToPrevioustMonth = () => {
	return {
		type: MOVE_TO_PREVIOUS_MONTH,
	}
}

export const updateCalendar = (eventData) => {
	return {
		type: UPDATE_CALENDAR,
		payload: eventData,
	}
}

export const returnToCurrentDate = () => {
	return {
		type: RETURN_TO_CURRENT_DATE,
	}
}
