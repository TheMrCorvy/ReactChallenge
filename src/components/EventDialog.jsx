import { useEffect, forwardRef, useState } from "react"

import { useSelector, useDispatch } from "react-redux"
import { closeDialog } from "../actions/dialogActions"

import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import ListItemText from "@mui/material/ListItemText"
import ListItem from "@mui/material/ListItem"
import List from "@mui/material/List"
import Divider from "@mui/material/Divider"
import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import CloseIcon from "@mui/icons-material/Close"
import Slide from "@mui/material/Slide"

import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"

import { getEventsByDay } from "../services/eventServices"
import sortEventsByTime from "../helper/sortEventsByTime"
import nthDay from "../helper/nthDay"

import { monthsOfYear } from "../helper/constants"

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />
})

const EventDialog = () => {
	const [eventList, setEventList] = useState([])
	const { dialogIsOpen, eventDate } = useSelector((state) => state.dialog)
	const dispatch = useDispatch()

	useEffect(() => {
		if (eventDate) {
			const eventsObj = getEventsByDay({
				day: eventDate.number,
				month: eventDate.month,
				year: eventDate.year,
			})

			setEventList(sortEventsByTime(Object.values(eventsObj)))
		}
	}, [dialogIsOpen, eventDate])

	return (
		<Dialog
			open={dialogIsOpen ? true : false}
			TransitionComponent={Transition}
			keepMounted
			fullScreen
			onClose={() => dispatch(closeDialog())}
			aria-describedby="alert-dialog-slide-description"
		>
			<AppBar sx={{ position: "relative" }}>
				<Toolbar>
					<IconButton
						edge="start"
						color="inherit"
						onClick={() => dispatch(closeDialog())}
						aria-label="close"
					>
						<CloseIcon />
					</IconButton>
					{eventDate && (
						<Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
							{monthsOfYear[eventDate.month]} {eventDate.number}
							{nthDay(eventDate.number)}
						</Typography>
					)}
					<Button autoFocus color="inherit" onClick={() => dispatch(closeDialog())}>
						Go Back
					</Button>
				</Toolbar>
			</AppBar>
			<List>
				{eventList &&
					eventList.map((event, eventIndex) => (
						<>
							<ListItem
								key={`list-tem-events-dialog-${eventIndex}-date-${event.date.day}`}
								secondaryAction={
									<>
										<IconButton edge="end" aria-label="edit" sx={{ mr: 3 }}>
											<EditIcon />
										</IconButton>
										<IconButton edge="end" aria-label="delete" sx={{ mr: 3 }}>
											<DeleteIcon />
										</IconButton>
									</>
								}
								sx={{
									px: 5,
								}}
							>
								<ListItemText primary={event.city} secondary={event.description} />
								<ListItemText primary="The forecast for this date and city is as follows: Posisible raining, with 19ºC or 32ºF." />
							</ListItem>
							<Divider />
						</>
					))}
			</List>
		</Dialog>
	)
}

export default EventDialog
