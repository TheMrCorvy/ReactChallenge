import { useDispatch } from "react-redux"
import { openDrawer } from "../actions/drawerActions"

import Button from "@mui/material/Button"

import DrawerMenu from "../components/DrawerMenu"
import Navbar from "../components/Navbar"
import CalendarComponent from "../components/CalendarComponent"
import EventDialog from "../components/EventDialog"

function Calendar(props) {
	const dispatch = useDispatch()

	return (
		<>
			<DrawerMenu />
			<Navbar />
			<CalendarComponent />
			<EventDialog />
			<Button onClick={() => dispatch(openDrawer())}>Add Event</Button>
		</>
	)
}

export default Calendar
