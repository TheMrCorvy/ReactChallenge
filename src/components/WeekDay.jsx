import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { openDialog } from "../actions/dialogActions"

import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import ButtonBase from "@mui/material/ButtonBase"

import { lightBlue, grey } from "@mui/material/colors"
import { useTheme } from "@mui/material/styles"

import { getEventsByDay } from "../services/eventServices"
import sortEventsByTime from "../helper/sortEventsByTime"

import Event from "./Event"

const WeekDay = ({ day, dayIndex, className }) => {
	const [isWeekend, setIsWeekend] = useState(false)
	const [todaysEvents, setTodaysEvents] = useState(false)
	const [bgColor, setBgColor] = useState(0)
	const calendar = useSelector((state) => state.calendar)
	const theme = useTheme()
	const dispatch = useDispatch()

	const colorOptions = [theme.palette.background.paper, lightBlue[700], grey[200]]

	useEffect(() => {
		if (!calendar) return
		if (!calendar.eventData) return

		const eventDay = calendar.eventData.date.day
		const eventMonth = calendar.eventData.date.month
		const eventYear = calendar.eventData.date.year

		if (eventDay !== day.number || eventMonth !== day.month || eventYear !== day.year) {
			const eventsObj = getEventsByDay({
				day: day.number,
				month: day.month,
				year: day.year,
			})

			if (eventsObj && Object.values(eventsObj)[0].date.month === day.month) {
				setTodaysEvents(sortEventsByTime(Object.values(eventsObj)))
			} else {
				setTodaysEvents(false)
			}
			return
		}

		if (!todaysEvents) {
			setTodaysEvents([calendar.eventData])
			return
		}

		if (todaysEvents && todaysEvents.find((event) => event.time === calendar.eventData.time)) {
			return
		}

		let newEventsArr = [...todaysEvents]
		newEventsArr.push(calendar.eventData)
		setTodaysEvents(sortEventsByTime(newEventsArr))
	}, [calendar])

	useEffect(() => {
		const weekend = dayIndex === 0 || dayIndex === 6
		let newBgColor

		if (weekend) {
			newBgColor = 2
		} else {
			newBgColor = 0
		}

		if (day.isToday) {
			newBgColor = 1
		}

		setIsWeekend(weekend)
		setBgColor(newBgColor)

		const eventsObj = getEventsByDay({
			day: day.number,
			month: day.month,
			year: day.year,
		})

		if (eventsObj && Object.values(eventsObj)[0].date.month === day.month) {
			setTodaysEvents(sortEventsByTime(Object.values(eventsObj)))
		}
	}, [dayIndex])

	const dispatchOpenDielog = () => {
		if (!todaysEvents) return

		dispatch(openDialog(day))
	}

	return (
		<Grid
			item
			xs
			sx={{
				borderLeft: dayIndex === 0 ? "1px solid #dadce0" : "none",
				bgcolor: isWeekend ? grey[200] : theme.palette.background.paper,
			}}
			className={className}
		>
			<ButtonBase
				onClick={dispatchOpenDielog}
				sx={{
					flexGrow: 1,
					flexDirection: "column",
					borderRadius: !todaysEvents ? "50%" : "4px",
					width: !todaysEvents ? "auto" : "100%",
					minHeight: !todaysEvents ? "auto" : "100%",
					justifyContent: "start",
				}}
			>
				<Typography
					sx={{
						background: colorOptions[bgColor],
						lineHeight: "26px",
						padding: theme.spacing(0.2),
						borderStyle: "solid",
						borderRadius: "50%",
						color: day.isToday ? "white" : "inherit",
						borderColor: isWeekend ? grey[200] : theme.palette.background.paper,
						height: 35,
						width: 35,
						marginBottom: !day.isToday ? 0.5 : 0,
						"&:hover": {
							backgroundColor: day.isToday ? lightBlue[800] : theme.palette.grey[100],
							cursor: "pointer",
						},
					}}
				>
					{day.number}
				</Typography>

				{todaysEvents && <Event day={day} eventsArr={todaysEvents} />}
			</ButtonBase>
		</Grid>
	)
}

export default WeekDay
