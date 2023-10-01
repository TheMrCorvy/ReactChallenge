import { useEffect, useState } from "react"

import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import AlertTitle from "@mui/material/AlertTitle"
import Stack from "@mui/material/Stack"
import Alert from "@mui/material/Alert"

import { lightBlue, grey } from "@mui/material/colors"
import { useTheme } from "@mui/material/styles"

const WeekDay = ({ day, dayIndex, weekIndex, className }) => {
	const [isWeekend, setIsWeekend] = useState(false)
	const [bgColor, setBgColor] = useState(0)
	const theme = useTheme()

	const colorOptions = [theme.palette.background.paper, lightBlue[700], grey[200]]
	const hoverColorOptions = [theme.palette.background.paper, lightBlue[800], grey[100]]

	useEffect(() => {
		setIsWeekend(dayIndex === 0 || dayIndex === 6)
		let newBgColor

		if (isWeekend) {
			newBgColor = 2
		} else {
			newBgColor = 0
		}

		if (day.isToday) {
			newBgColor = 1
		}

		setBgColor(newBgColor)
	}, [dayIndex])

	return (
		<Grid
			item
			xs
			key={`big-calendar-line-week-${weekIndex}-day-${dayIndex}`}
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
					severity="warning"
				>
					<AlertTitle>Error</AlertTitle>
					<span style={{ padding: 0 }}>
						texto de prueba para ver realmente que tan largo alcanza a ser el alert
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
						texto de prueba para ver realmente que tan largo alcanza a ser el alert
					</span>
				</Alert>
				<Alert
					sx={{
						display: { xs: "block", sm: "block", md: "none" },
						px: 0.4,
					}}
					severity="info"
					variant="filled"
				>
					{" "}
				</Alert>
			</Stack>
		</Grid>
	)
}

export default WeekDay
