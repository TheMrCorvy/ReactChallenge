import { OPEN_DRAWER, CLOSE_DRAWER } from "../actions/drawerActions"

const initialState = {
	open: false,
}

const drawerReducer = (state = initialState, action) => {
	switch (action.type) {
		case OPEN_DRAWER:
			return {
				...state,
				open: true,
			}
		case CLOSE_DRAWER:
			return {
				...state,
				open: false,
			}

		default:
			return {
				...state,
			}
	}
}

export default drawerReducer
