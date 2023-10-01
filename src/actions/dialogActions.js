export const CLOSE_DIALOG = "CLOSE_DIALOG"
export const OPEN_DIALOG = "OPEN_DIALOG"

export const openDialog = (eventDate) => {
	return {
		type: OPEN_DIALOG,
		payload: eventDate,
	}
}

export const closeDialog = () => {
	return {
		type: CLOSE_DIALOG,
		payload: false,
	}
}
