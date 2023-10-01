import { useState, useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import { closeDrawer } from "../../actions/drawerActions"
import { updateCalendar } from "../../actions/calendarActions"

import Drawer from "@mui/material/Drawer"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"

import SaveIcon from "@mui/icons-material/Save"

import useDatesList from "../../hooks/useDatesList"
import MiniCalendar from "../MiniCalendar"

import { createEvent, updateEvent } from "../../services/eventServices"
import timeOptions from "../../helper/timeOptions"

const DrawerMenu = () => {
	const { open, eventData } = useSelector((state) => state.open)
	const dispatch = useDispatch()

	const { datesList, selectedDate, setSelectedDate } = useDatesList()

	const [eventInfo, setEventInfo] = useState({
		city: " ",
		description: " ",
	})

	useEffect(() => {
		if (!eventData) return
		const newDate = new Date(eventData.date.year, eventData.date.month, eventData.date.day)
		setSelectedDate({
			currentDate: newDate,
			currentMonth: eventData.date.month,
			currentYear: eventData.date.year,
		})
		setEventInfo({
			city: eventData.city,
			description: eventData.description,
			time: eventData.time,
		})
	}, [eventData])

	const moveToLastMonth = () => {
		const newMonth = selectedDate.currentMonth - 1 < 0 ? 11 : selectedDate.currentMonth - 1
		const newYear = newMonth === 11 ? selectedDate.currentYear - 1 : selectedDate.currentYear

		const newDate = new Date(newYear, newMonth, 1)

		setSelectedDate({
			currentDate: newDate,
			currentMonth: newMonth,
			currentYear: newYear,
		})
	}

	const moveToNextMonth = () => {
		const newMonth = selectedDate.currentMonth + 1 > 11 ? 0 : selectedDate.currentMonth + 1
		const newYear = newMonth === 0 ? selectedDate.currentYear + 1 : selectedDate.currentYear

		const newDate = new Date(newYear, newMonth, 1)

		setSelectedDate({
			currentDate: newDate,
			currentMonth: newMonth,
			currentYear: newYear,
		})
	}

	const selectDate = (number) => {
		const newDate = new Date(selectedDate.currentYear, selectedDate.currentMonth, number)

		setSelectedDate({
			...selectedDate,
			currentDate: newDate,
		})
	}

	const handleChange = (event, key) => {
		setEventInfo({
			...eventInfo,
			[key]: event.target.value,
		})
	}

	const handleSubmit = () => {
		if (eventInfo.city.length <= 0 || eventInfo.description.length <= 0) return
		if (eventInfo.city.length > 30 || eventInfo.description.length > 30) return

		const newEvent = {
			...eventInfo,
			date: {
				day: selectedDate.currentDate.getDate(),
				month: selectedDate.currentMonth,
				year: selectedDate.currentYear,
			},
		}

		if (eventData) {
			updateEvent(newEvent, eventData)
		} else {
			createEvent(newEvent)
		}

		dispatch(closeDrawer())
		dispatch(updateCalendar(newEvent))

		const newDate = new Date()
		setSelectedDate({
			currentDate: newDate,
			currentMonth: newDate.getMonth(),
			currentYear: newDate.getFullYear(),
		})

		setEventInfo({
			city: " ",
			description: " ",
		})
	}

	return (
		<Drawer
			anchor="left"
			open={open}
			onClose={() => dispatch(closeDrawer())}
			sx={{
				padding: "1.5rem",
			}}
		>
			<Grid
				container
				spacing={2}
				sx={{
					padding: "1rem",
					maxWidth: "20rem",
				}}
			>
				<Grid item xs={12}>
					<Typography variant="h5" gutterBottom>
						Add a new event:
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<MiniCalendar
						selectDate={selectDate}
						moveToLastMonth={moveToLastMonth}
						moveToNextMonth={moveToNextMonth}
						datesList={datesList}
						selectedDate={selectedDate}
					/>
				</Grid>
				<Grid item xs={12}>
					<FormControl fullWidth variant="filled">
						<InputLabel id="time-select">Pick a Time</InputLabel>
						<Select
							labelId="time-select"
							id="time-select-options"
							value={eventInfo.time ? eventInfo.time : ""}
							onChange={(e) => handleChange(e, "time")}
							size="small"
						>
							{timeOptions(30).map((option, optionIndex) => (
								<MenuItem
									value={option}
									key={`small-calendar-time-picker-${optionIndex}`}
								>
									{option}
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12}>
					<TextField
						id="event-city-input"
						label="City for the event"
						fullWidth
						variant="filled"
						value={eventInfo.city}
						onChange={(e) => handleChange(e, "city")}
						error={eventInfo.city.length > 30 || eventInfo.city.length === 0}
						helperText="Try to include between 1 to 30 characters"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						id="event-description-input"
						label="Event Description"
						fullWidth
						variant="filled"
						value={eventInfo.description}
						onChange={(e) => handleChange(e, "description")}
						error={
							eventInfo.description.length > 30 || eventInfo.description.length === 0
						}
						helperText="Try to include between 1 to 30 characters"
					/>
				</Grid>
				<Grid item xs={12} sx={{ textAlign: "center" }}>
					<Button
						variant="contained"
						disableElevation
						startIcon={<SaveIcon />}
						onClick={handleSubmit}
					>
						Save Event
					</Button>
				</Grid>
			</Grid>
		</Drawer>
	)
}

export default DrawerMenu
