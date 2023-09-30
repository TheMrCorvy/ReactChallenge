import { useState, useContext, useEffect, useMemo } from "react"

import Drawer from "@mui/material/Drawer"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"

import MiniCalendar from "../MiniCalendar"

const DrawerMenu = ({ open, toggleDrawer }) => {
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
				}}
			>
				<Grid item xs={12}>
					<Typography variant="h4" gutterBottom>
						Add a new event
					</Typography>
				</Grid>

				<Grid item xs={12} sx={{ width: "0rem" }}>
					<MiniCalendar />
				</Grid>
			</Grid>
		</Drawer>
	)
}

export default DrawerMenu
