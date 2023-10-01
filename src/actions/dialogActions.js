export const CLOSE_DIALOG = "CLOSE_DIALOG"
export const OPEN_DIALOG = "OPEN_DIALOG"

export const openDialog = () => {
	return {
		type: OPEN_DIALOG,
		open: true,
	}
}

export const closeDialog = () => {
	return {
		type: CLOSE_DIALOG,
		open: false,
	}
}
