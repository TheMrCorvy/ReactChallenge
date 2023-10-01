import { useState, useEffect } from "react"

import Container from "@mui/material/Container"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import AlertTitle from "@mui/material/AlertTitle"
import Stack from "@mui/material/Stack"
import Alert from "@mui/material/Alert"

import { lightBlue } from "@mui/material/colors"
import { useTheme } from "@mui/material/styles"

import { daysOfWeek } from "../../helper/constants"
import useDatesList from "../../hooks/useDatesList"
import splitIntoWeeks from "../../helper/splitIntoWeeks"

const CalendarComponent = () => {
	const theme = useTheme()
	const [weeks, setWeeks] = useState([])

	const { datesList } = useDatesList()

	useEffect(() => {
		setWeeks(splitIntoWeeks(datesList))
	}, [])

	return (
		<Container
			maxWidth="xl"
			sx={{
				height: "90vh",
				marginTop: "1rem",
			}}
		>
			<Grid container spacing={0}>
				<Grid item xs={12}>
					<Grid
						container
						spacing={0}
						sx={{
							borderTop: "1px solid #dadce0",
							borderLeft: "1px solid #dadce0",
						}}
					>
						{daysOfWeek.map((weekDay, index) => (
							<Grid item xs key={`big-calendar-column-header-${index}`}>
								<Box
									sx={{
										borderBottom: "1px solid #dadce0",
										borderRight: "1px solid #dadce0",
										padding: theme.spacing(1),
										textAlign: "center",
										color: theme.palette.text.secondary,
										backgroundColor: theme.palette.background.paper,
										borderRadius: 0,
										minWidth: 64.38,
									}}
								>
									<Typography>{weekDay}</Typography>
								</Box>
							</Grid>
						))}
					</Grid>
				</Grid>
				{weeks.map((week, weekIndex) => (
					<Grid item xs={12} key={`big-calendar-line-week-${weekIndex}`}>
						<Grid container spacing={0}>
							{week.map((day, dayIndex) => (
								<Grid
									item
									xs
									key={`big-calendar-line-week-${weekIndex}-day-${dayIndex}`}
									sx={{
										borderBottom: "1px solid #dadce0",
										borderRight: "1px solid #dadce0",
										borderLeft: dayIndex === 0 ? "1px solid #dadce0" : "none",
										padding: theme.spacing(1),
										textAlign: "center",
										color: theme.palette.text.secondary,
										backgroundColor: theme.palette.background.paper,
										height: "16.5vh",
										overflowY: "scroll",
									}}
								>
									{day.number}
									<Stack
										sx={{
											width: "100%",
											mt: day.isToday ? "5px" : null,
										}}
										spacing={1}
									>
										<Alert
											icon={false}
											sx={{
												display: { xs: "none", sm: "none", md: "block" },
											}}
											severity="error"
										>
											<AlertTitle>Error</AlertTitle>
											<span style={{ padding: 0 }}>
												texto de prueba para ver realmente que tan largo
												alcanza a ser el alert
											</span>
										</Alert>
										<Alert
											icon={false}
											sx={{
												display: { xs: "none", sm: "none", md: "block" },
											}}
											severity="error"
										>
											<AlertTitle>Error</AlertTitle>
											<span style={{ padding: 0 }}>
												texto de prueba para ver realmente que tan largo
												alcanza a ser el alert
											</span>
										</Alert>
									</Stack>
								</Grid>
							))}
						</Grid>
					</Grid>
				))}
			</Grid>
		</Container>
	)
}

export default CalendarComponent
