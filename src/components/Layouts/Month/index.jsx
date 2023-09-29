import { useEffect, useState } from "react"

import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import Alert from "@mui/material/Alert"
import AlertTitle from "@mui/material/AlertTitle"
import Stack from "@mui/material/Stack"

import styles from "./Month.module.css"

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

function Month() {
	const [dates, setDates] = useState([])

	function getDatesInReverse(year, month, amountOfDays) {
		const lastDayOfMonth = new Date(year, month, 0).getDate()
		const datesInReverse = []

		for (let day = lastDayOfMonth; day >= lastDayOfMonth - amountOfDays; day--) {
			const date = new Date(year, month - 1, day) // Months are zero-based, so subtract 1 from the month.
			const dayOfWeek = date.toLocaleString("en-US", { weekday: "long" })

			datesInReverse.push({
				number: day,
				dayLabel: dayOfWeek,
			})
		}

		return datesInReverse
	}

	useEffect(() => {
		const currentDate = new Date()

		const currentYear = currentDate.getFullYear()
		const currentMonth = currentDate.getMonth() // Months are zero-based, so add 1 to get the current month.

		const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate()

		let listOfDates = []

		for (let day = 1; day <= daysInMonth; day++) {
			const date = new Date(currentYear, currentMonth, day)

			listOfDates.push({
				number: day,
				dayLabel: daysOfWeek[date.getDay()],
				isToday: date.getDate() === new Date().getDate(),
			})
		}

		if (listOfDates[0].dayLabel !== daysOfWeek[0]) {
			const remainingDays = daysOfWeek.indexOf(listOfDates[0].dayLabel)
			const lastDaysInReverse = getDatesInReverse(currentYear, currentMonth, remainingDays - 1)

			lastDaysInReverse.forEach((day) => listOfDates.unshift(day))
		}

		if (listOfDates[listOfDates.length - 1].dayLabel !== daysOfWeek[6]) {
			const currentMonthIndex = daysOfWeek.indexOf(listOfDates[listOfDates.length - 1].dayLabel) // saturday

			let newDay = 1
			for (let day = currentMonthIndex + 1; day < daysOfWeek.length; day++) {
				listOfDates.push({
					number: newDay,
					dayLabel: daysOfWeek[day],
				})

				newDay++
			}
		}

		setDates(listOfDates)
	}, [])

	return (
		<Grid container spacing={0} className={styles.month_layout_column}>
			<Grid item xs={12}>
				<Grid container spacing={0}>
					{daysOfWeek.map((day, i) => (
						<Grid
							item
							className={styles.month_layout_cell}
							key={"monthly_layout_cell_title_" + i}
							sx={{ display: { xs: "none", sm: "none", md: "block" } }}
						>
							<h3>{day}</h3>
						</Grid>
					))}
				</Grid>
			</Grid>
			{dates &&
				dates.map((date, i) => (
					<Grid item xs className={styles.month_layout_cell} key={"monthly_layout_cell_" + i}>
						<div>
							{date.isToday ? (
								<>
									<Button color="primary" variant="contained" size="small" sx={{ marginBottom: 0 }}>
										{date.number}
									</Button>
								</>
							) : (
								<p>{date.number}</p>
							)}
						</div>
						<Stack sx={{ width: "100%", mt: date.isToday ? "5px" : null }} spacing={0}>
							<Alert
								icon={false}
								sx={{ display: { xs: "none", sm: "none", md: "block" } }}
								severity="error"
								className={styles.no_pading}
							>
								<AlertTitle>Error</AlertTitle>
								<span style={{ padding: 0 }}>
									texto de prueba para ver realmente que tan largo alcanza a ser el alert
								</span>
							</Alert>
							<Alert
								icon={false}
								sx={{ display: { xs: "none", sm: "none", md: "block" } }}
								severity="error"
								className={styles.no_pading}
							>
								<AlertTitle>Error</AlertTitle>
								<span style={{ padding: 0 }}>
									texto de prueba para ver realmente que tan largo alcanza a ser el alert
								</span>
							</Alert>
							<Alert
								sx={{ display: { xs: "block", sm: "block", md: "none" }, px: 0.4, py: 0 }}
								severity="info"
								variant="filled"
							>
								{" "}
							</Alert>
							<Alert
								sx={{ display: { xs: "block", sm: "block", md: "none" }, px: 0.4, py: 0 }}
								severity="info"
								variant="filled"
							>
								{" "}
							</Alert>
							<Alert
								sx={{ display: { xs: "block", sm: "block", md: "none" }, px: 0.4 }}
								severity="info"
								variant="filled"
							>
								{" "}
							</Alert>
						</Stack>
					</Grid>
				))}
		</Grid>
	)
}

export default Month
