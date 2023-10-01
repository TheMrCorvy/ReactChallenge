import Stack from "@mui/material/Stack"
import Alert from "@mui/material/Alert"
import AlertTitle from "@mui/material/AlertTitle"

const Event = ({ day, eventsArr }) => {
	return (
		<Stack
			sx={{
				width: "100%",
				mt: day.isToday ? "5px" : null,
			}}
			spacing={1}
		>
			{eventsArr.map((event, eventIndex) => (
				<div key={`big-calendar-day-${day.number}-month-${day.month}-${eventIndex}`}>
					<Alert
						icon={false}
						sx={{
							display: { xs: "none", sm: "none", md: "block" },
						}}
						severity="warning"
					>
						<AlertTitle sx={{ textTransform: "capitalize" }}>
							{event.time} - {event.city}
						</AlertTitle>
						<span style={{ padding: 0 }}>{event.description}</span>
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
				</div>
			))}
		</Stack>
	)
}

export default Event
