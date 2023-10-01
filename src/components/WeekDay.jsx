import { useEffect, useState } from "react"

import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

import { lightBlue, grey } from "@mui/material/colors"
import { useTheme } from "@mui/material/styles"

import { getEventsByDay } from "../services/eventServices"
import sortEventsByTime from "../helper/sortEventsByTime"

import Event from "./Event"

const WeekDay = ({ day, dayIndex, className }) => {
	const [isWeekend, setIsWeekend] = useState(false)
	const [todaysEvents, setTodaysEvents] = useState(false)
	const [bgColor, setBgColor] = useState(0)
	const theme = useTheme()

	const colorOptions = [theme.palette.background.paper, lightBlue[700], grey[200]]

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
					"&:hover": {
						backgroundColor: day.isToday ? lightBlue[800] : theme.palette.grey[100],
						cursor: "pointer",
					},
				}}
			>
				{day.number}
			</Typography>
			{todaysEvents && <Event day={day} eventsArr={todaysEvents} />}
		</Grid>
	)
}

export default WeekDay
