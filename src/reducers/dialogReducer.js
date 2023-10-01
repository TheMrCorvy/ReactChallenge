import { OPEN_DIALOG, CLOSE_DIALOG } from "../actions/dialogActions"

const initialState = {
	open: false,
}

const dialogReducer = (state = initialState, action) => {
	switch (action.type) {
		case OPEN_DIALOG:
			return {
				...state,
				dialogIsOpen: true,
			}
		case CLOSE_DIALOG:
			return {
				...state,
				dialogIsOpen: false,
			}

		default:
			return {
				...state,
			}
	}
}

export default dialogReducer
