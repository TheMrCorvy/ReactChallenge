import Grid from "@mui/material/Grid"
import Button from "@mui/material/Button"
import Alert from "@mui/material/Alert"
import AlertTitle from "@mui/material/AlertTitle"
import Stack from "@mui/material/Stack"

import styles from "./Month.module.css"

import useDatesList from "../../../hooks/useDatesList"

function Month() {
	const { datesList, daysOfWeek } = useDatesList()

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
			{datesList &&
				datesList.map((date, i) => (
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
						<Stack sx={{ width: "100%", mt: date.isToday ? "5px" : null }} spacing={1}>
							<Alert
								icon={false}
								sx={{ display: { xs: "none", sm: "none", md: "block" } }}
								severity="error"
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
