import { useState } from "react"

import Button from "@mui/material/Button"

import DrawerMenu from "../components/DrawerMenu"
import Month from "../components/Layouts/Month"
import Navbar from "../components/Navbar"

function Calendar(props) {
	const [open, setOpen] = useState(false)

	const toggleDrawer = (drawerState) => {
		setOpen(drawerState)
	}

	return (
		<>
			<DrawerMenu open={open} toggleDrawer={toggleDrawer} />
			<Navbar />
			<Month />
			<Button onClick={() => toggleDrawer(true)}>Add Event</Button>
		</>
	)
}

export default Calendar
