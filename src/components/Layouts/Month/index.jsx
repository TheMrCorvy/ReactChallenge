import { useEffect } from "react"

import Grid from "@mui/material/Grid"

import styles from "./Month.module.css"

function Month() {
	useEffect(() => {
		const currentDate = new Date()

		const currentYear = currentDate.getFullYear()
		const currentMonth = currentDate.getMonth() // Months are zero-based, so add 1 to get the current month.
		const today = currentDate.getDate()

		const daysInMonth = new Date(currentYear, currentMonth, 0).getDate()

		const daysOfWeek = [
			"Sunday",
			"Monday",
			"Tuesday",
			"Wednesday",
			"Thursday",
			"Friday",
			"Saturday",
		]
		let listOfDates = [
			/**
			 * {
			 * 		number: number
			 * 		dayLabel: uno de los del array
			 * }
			 */
		]

		for (let day = 1; day < daysInMonth; day++) {
			const date = new Date(currentYear, currentMonth, day) // Months are zero-based, so subtract 1 from the month.
			listOfDates.push({
				number: day,
				dayLabel: daysOfWeek[date.getDay()],
			})
		}

		console.log({
			currentYear,
			currentMonth,
			today,
			daysInMonth,
			listOfDates,
		})
	}, [])

	return (
		<Grid container spacing={0.5} sx={{ height: "90vh" }}>
			<Grid item xs sx={{ maxWidth: "12.5vw", border: "1px solid", background: "red" }}>
				calendario chiquito
			</Grid>
			<Grid item xs className={styles.month_layout_column}>
				<Grid container spacing={0.5}>
					<Grid item xs className={styles.month_layout_cell}>
						1
					</Grid>
					<Grid item xs className={styles.month_layout_cell}>
						2
					</Grid>
					<Grid item xs className={styles.month_layout_cell}>
						1
					</Grid>
					<Grid item xs className={styles.month_layout_cell}>
						2
					</Grid>
					<Grid item xs className={styles.month_layout_cell}>
						1
					</Grid>
					<Grid item xs className={styles.month_layout_cell}>
						2
					</Grid>
					<Grid item xs className={styles.month_layout_cell}>
						1
					</Grid>
					<Grid item xs className={styles.month_layout_cell}>
						1
					</Grid>
					<Grid item xs className={styles.month_layout_cell}>
						2
					</Grid>
					<Grid item xs className={styles.month_layout_cell}>
						1
					</Grid>
					<Grid item xs className={styles.month_layout_cell}>
						2
					</Grid>
					<Grid item xs className={styles.month_layout_cell}>
						1
					</Grid>
					<Grid item xs className={styles.month_layout_cell}>
						2
					</Grid>
					<Grid item xs className={styles.month_layout_cell}>
						1
					</Grid>
					<Grid item xs className={styles.month_layout_cell}>
						1
					</Grid>
					<Grid item xs className={styles.month_layout_cell}>
						2
					</Grid>
					<Grid item xs className={styles.month_layout_cell}>
						1
					</Grid>
					<Grid item xs className={styles.month_layout_cell}>
						2
					</Grid>
					<Grid item xs className={styles.month_layout_cell}>
						1
					</Grid>
					<Grid item xs className={styles.month_layout_cell}>
						2
					</Grid>
					<Grid item xs className={styles.month_layout_cell}>
						1
					</Grid>
					<Grid item xs className={styles.month_layout_cell}>
						1
					</Grid>
					<Grid item xs className={styles.month_layout_cell}>
						2
					</Grid>
					<Grid item xs className={styles.month_layout_cell}>
						1
					</Grid>
					<Grid item xs className={styles.month_layout_cell}>
						2
					</Grid>
					<Grid item xs className={styles.month_layout_cell}>
						1
					</Grid>
					<Grid item xs className={styles.month_layout_cell}>
						2
					</Grid>
					<Grid item xs className={styles.month_layout_cell}>
						1
					</Grid>
					<Grid item xs className={styles.month_layout_cell}>
						1
					</Grid>
					<Grid item xs className={styles.month_layout_cell}>
						2
					</Grid>
					<Grid item xs className={styles.month_layout_cell}>
						1
					</Grid>
					<Grid item xs className={styles.month_layout_cell}>
						2
					</Grid>
					<Grid item xs className={styles.month_layout_cell}>
						1
					</Grid>
					<Grid item xs className={styles.month_layout_cell}>
						2
					</Grid>
					<Grid item xs className={styles.month_layout_cell}>
						1
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	)
}

export default Month
