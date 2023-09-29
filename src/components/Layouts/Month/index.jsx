import { useEffect, useState } from "react"

import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import Alert from "@mui/material/Alert"
import Stack from "@mui/material/Stack"

import styles from "./Month.module.css"

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

		const daysOfWeek = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		]
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
		<Grid container spacing={0} sx={{ height: "90vh" }}>
			<Grid item xs sx={{ maxWidth: "12.5vw", border: "1px solid", background: "red" }}>
				calendario chiquito
			</Grid>
			<Grid item xs className={styles.month_layout_column}>
				<Grid container spacing={0}>
					{dates &&
						dates.map((date, i) => (
							<Grid item xs className={styles.month_layout_cell} key={"monthly_layout_cell_" + i}>
								<div>
									{date.isToday ? (
										<>
											<Button
												color="primary"
												variant="contained"
												size="small"
												sx={{ marginBottom: 0 }}
											>
												{date.number}
											</Button>
										</>
									) : (
										<p>{date.number}</p>
									)}
								</div>
								<Stack sx={{ width: "100%", mt: date.isToday ? "5px" : null }} spacing={0}>
									<Alert icon={false} severity="error" className={styles.no_pading}>
										<span style={{ padding: 0 }}>
											texto de prueba para ver realmente que tan largo alcanza a ser el alert
										</span>
									</Alert>
									<Alert icon={false} severity="error">
										This is an error alert
									</Alert>
									<Alert icon={false} severity="error" className={styles.no_pading}>
										<span style={{ padding: 0 }}>
											texto de prueba para ver realmente que tan largo alcanza a ser el alert
										</span>
									</Alert>
									<Alert icon={false} severity="error">
										This is an error alert
									</Alert>
								</Stack>
							</Grid>
						))}
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Month