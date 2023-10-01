import { OPEN_DIALOG, CLOSE_DIALOG } from "../actions/dialogActions"

const initialState = {
	dialogIsOpen: false,
	eventdate: null,
}

const dialogReducer = (state = initialState, action) => {
	switch (action.type) {
		case OPEN_DIALOG:
			return {
				...state,
				dialogIsOpen: true,
				eventDate: action.payload,
			}
		case CLOSE_DIALOG:
			return {
				...state,
				dialogIsOpen: false,
				eventdate: null,
			}

		default:
			return {
				...state,
			}
	}
}

export default dialogReducer
