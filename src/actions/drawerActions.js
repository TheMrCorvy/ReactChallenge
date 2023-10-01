export const CLOSE_DRAWER = "CLOSE_DRAWER"
export const OPEN_DRAWER = "OPEN_DRAWER"
export const OPEN_DRAWER_WITH_DATA = "OPEN_DRAWER_WITH_DATA"

export const openDrawer = () => {
	return {
		type: OPEN_DRAWER,
		open: true,
	}
}

export const closeDrawer = () => {
	return {
		type: CLOSE_DRAWER,
		open: false,
	}
}

export const openDrawerWithData = (eventData) => {
	return {
		type: OPEN_DRAWER_WITH_DATA,
		payload: eventData,
	}
}
