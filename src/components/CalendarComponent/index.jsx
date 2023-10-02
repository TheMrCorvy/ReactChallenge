import { useState, useEffect } from "react"

import { useSelector } from "react-redux"

import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import { useTheme } from "@mui/material/styles"

import styles from "./CalendarComponent.module.css"

import { daysOfWeek } from "../../helper/constants"
import useDatesList from "../../hooks/useDatesList"
import splitIntoWeeks from "../../helper/splitIntoWeeks"
import WeekDay from "../WeekDay"

const CalendarComponent = () => {
	const theme = useTheme()
	const [weeks, setWeeks] = useState([])
	const calendar = useSelector((state) => state.calendar)

	const { datesList, selectedDate, setSelectedDate } = useDatesList()

	useEffect(() => {
		setWeeks(splitIntoWeeks(datesList))
	}, [datesList])

	useEffect(() => {
		setSelectedDate({
			currentDate: calendar.currentDate,
			currentMonth: calendar.currentMonth,
			currentYear: calendar.currentYear,
		})
	}, [calendar])

	return (
		<Container
			maxWidth="xl"
			className={styles.calendar_container}
			sx={{
				color: theme.palette.text.secondary,
			}}
		>
			<Grid container spacing={0}>
				<Grid item xs={12}>
					<Grid container spacing={0} className={styles.calendar_grid}>
						{daysOfWeek.map((weekDay, index) => (
							<Grid item xs key={`big-calendar-column-header-${index}`}>
								<Box className={styles.calendar_header_cell}>
									<Typography
										sx={{ display: { xs: "none", sm: "none", md: "block" } }}
									>
										{weekDay}
									</Typography>
									<Typography
										sx={{ display: { xs: "block", sm: "block", md: "none" } }}
									>
										{weekDay.substr(0, 1)}
									</Typography>
								</Box>
							</Grid>
						))}
					</Grid>
				</Grid>
				{weeks.map((week, weekIndex) => (
					<Grid item xs={12} key={`big-calendar-line-week-${weekIndex}`}>
						<Grid container spacing={0}>
							{week.map((day, dayIndex) => (
								<WeekDay
									key={`big-calendar-line-week-${weekIndex}-day-${dayIndex}`}
									day={day}
									dayIndex={dayIndex}
									weekIndex={weekIndex}
									className={styles.calendar_weekday_cell}
									selectedDate={selectedDate}
								/>
							))}
						</Grid>
					</Grid>
				))}
			</Grid>
		</Container>
	)
}

export default CalendarComponent
