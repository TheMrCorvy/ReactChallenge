import { OPEN_DRAWER, CLOSE_DRAWER, OPEN_DRAWER_WITH_DATA } from "../actions/drawerActions"

const initialState = {
	open: false,
	eventData: null,
}

const drawerReducer = (state = initialState, action) => {
	switch (action.type) {
		case OPEN_DRAWER:
			return {
				...state,
				open: true,
				eventData: null,
			}
		case CLOSE_DRAWER:
			return {
				...state,
				open: false,
				eventData: null,
			}
		case OPEN_DRAWER_WITH_DATA:
			return {
				...state,
				open: true,
				eventData: action.payload,
			}

		default:
			return {
				...state,
			}
	}
}

export default drawerReducer
