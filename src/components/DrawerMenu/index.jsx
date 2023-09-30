import { useState, useContext, useEffect, useMemo } from "react"

import Drawer from "@mui/material/Drawer"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import FormControl from "@mui/material/FormControl"
import Select from "@mui/material/Select"
import TextField from "@mui/material/TextField"
import Button from "@mui/material/Button"

import SaveIcon from "@mui/icons-material/Save"

import MiniCalendar from "../MiniCalendar"

const DrawerMenu = ({ open, toggleDrawer }) => {
	const [age, setAge] = useState("")

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

	return (
		<Drawer
			anchor="left"
			open={open}
			onClose={() => toggleDrawer(false)}
			sx={{
				padding: "1.5rem",
			}}
		>
			<Grid
				container
				spacing={2}
				sx={{
					padding: "1rem",
					maxWidth: "20rem",
				}}
			>
				<Grid item xs={12}>
					<Typography variant="h5" gutterBottom>
						Add a new event:
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<TextField
						id="event-title-input"
						label="Event Title"
						fullWidth
						variant="filled"
					/>
				</Grid>

				<Grid item xs={12}>
					<MiniCalendar />
				</Grid>
				<Grid item xs={12}>
					<FormControl fullWidth variant="filled">
						<InputLabel id="time-select">Pick a Time</InputLabel>
						<Select
							labelId="time-select"
							id="time-select-options"
							value={age}
							label="Age"
							onChange={handleChange}
							size="small"
						>
							{timeOptions(30).map((option, optionIndex) => (
								<MenuItem
									value={option}
									key={`small-calendar-time-picker-${optionIndex}`}
								>
									{option} Hs
								</MenuItem>
							))}
						</Select>
					</FormControl>
				</Grid>
				<Grid item xs={12}>
					<TextField
						id="filled-multiline-flexible"
						label="Event Description"
						multiline
						rows={4}
						variant="filled"
						fullWidth
					/>
				</Grid>
				<Grid item xs={12} sx={{ textAlign: "center" }}>
					<Button variant="contained" disableElevation startIcon={<SaveIcon />}>
						Save Event
					</Button>
				</Grid>
			</Grid>
		</Drawer>
	)
}

export default DrawerMenu
