import DrawerMenu from "../components/DrawerMenu"
import Navbar from "../components/Navbar"
import CalendarComponent from "../components/CalendarComponent"
import EventDialog from "../components/EventDialog"

function Calendar(props) {
	return (
		<>
			<DrawerMenu />
			<Navbar />
			<CalendarComponent />
			<EventDialog />
		</>
	)
}

export default Calendar
