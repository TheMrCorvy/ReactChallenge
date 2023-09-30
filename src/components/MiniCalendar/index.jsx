import { useState, useEffect } from "react"

import Typography from "@mui/material/Typography"
import Tooltip from "@mui/material/Tooltip"
import IconButton from "@mui/material/IconButton"
import Grid from "@mui/material/Grid"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"

import { lightBlue } from "@mui/material/colors"
import { useTheme } from "@mui/material/styles"

import useDatesList from "../../hooks/useDatesList"

const MiniCalendar = () => {
	const [weeks, setWeeks] = useState([])
	const [age, setAge] = useState("")

	const { datesList, daysOfWeek } = useDatesList()
	const theme = useTheme()

	useEffect(() => {
		splitIntoWeeks()
	}, [datesList])

	const splitIntoWeeks = () => {
		const weeksArr = []
		for (let i = 0; i < datesList.length; i += 7) {
			const week = datesList.slice(i, i + 7)
			weeksArr.push(week)
		}

		setWeeks(weeksArr)
	}

	const handleChange = (event) => {
		setAge(event.target.value)
	}

	const timeOptions = (interval) =>
		Array.from(Array(24).keys()).reduce((time, hour) => {
			Array.from(Array(60 / interval).keys()).map((i) => {
				const timeItem = (+(hour + "." + i * interval)).toFixed(2).replace(".", ":")
				time.push(timeItem)
				return null
			})
			return time
		}, [])

	const miniDay = (day) => {
		return (
			<Typography
				sx={{
					background: day.isToday ? lightBlue[700] : theme.palette.background.paper,
					textAlign: "center",
					fontSize: 12,
					lineHeight: "26px",
					padding: theme.spacing(0.2),
					borderStyle: "solid",
					textTransform: "capitalize",
					borderRadius: "50%",
					color: day.isToday ? "white" : "inherit",
					borderColor: theme.palette.background.paper,
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
		)
	}

	const miniOption = () => (
		<FormControl fullWidth variant="standard" sx={{ mt: 3 }}>
			<InputLabel id="time-select">Hour</InputLabel>
			<Select
				labelId="time-select"
				id="time-select-options"
				value={age}
				label="Age"
				onChange={handleChange}
				size="small"
			>
				{timeOptions(30).map((option, optionIndex) => (
					<MenuItem value={option} key={`small-calendar-time-picker-${optionIndex}`}>
						{option} Hs
					</MenuItem>
				))}
			</Select>
		</FormControl>
	)

	return (
		<Grid container>
			<Grid item xs={12}>
				<Grid container spacing={0}>
					{daysOfWeek.map((weekDay, index) => (
						<Grid item xs key={`small-calendar-column-header-${index}`}>
							<Typography
								sx={{
									textAlign: "center",
									fontSize: 12,
									color: lightBlue[800],
									lineHeight: "26px",
									padding: theme.spacing(0.2),
									borderColor: theme.palette.background.paper,
									borderStyle: "solid",
									textTransform: "capitalize",
									background: theme.palette.background.paper,
								}}
							>
								{weekDay.substr(0, 1)}
							</Typography>
						</Grid>
					))}
				</Grid>
			</Grid>
			{weeks.map((week, weekIndex) => (
				<Grid item xs={12} key={`small-calendar-line-week-${weekIndex}`}>
					<Grid container spacing={0}>
						{week.map((day, dayIndex) => (
							<Grid item xs key={`small-calendar-line-day-${dayIndex}`}>
								{miniDay(day)}
							</Grid>
						))}
					</Grid>
				</Grid>
			))}
			<Grid item xs={12} sx={{ mb: 3 }}>
				{miniOption()}
			</Grid>
		</Grid>
	)
}

export default MiniCalendar
