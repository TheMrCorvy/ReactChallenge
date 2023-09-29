import { Link } from "react-router-dom"

import HomeIcon from "@mui/icons-material/Home"
import ViewWeekIcon from "@mui/icons-material/ViewWeek"
import ViewDayIcon from "@mui/icons-material/ViewDay"
import ViewModuleIcon from "@mui/icons-material/ViewModule" // month

import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Tooltip from "@mui/material/Tooltip"

import styles from "./Navbar.module.css"

export default function ButtonAppBar() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Link to="/" className={styles.link}>
						<IconButton
							size="large"
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{ mr: 2, color: "inherit" }}
						>
							<HomeIcon />
						</IconButton>
					</Link>
					<Typography
						variant="h5"
						noWrap
						href="/"
						sx={{
							display: { xs: "none", md: "flex" },
							fontWeight: 700,
							flexGrow: 1,
							color: "inherit",
						}}
					>
						September 2023
					</Typography>
					<Tooltip title="Show Day">
						<IconButton size="large" color="inherit">
							<ViewDayIcon />
						</IconButton>
					</Tooltip>
					<Tooltip title="Show Week">
						<IconButton size="large" color="inherit">
							<ViewWeekIcon />
						</IconButton>
					</Tooltip>
					<Tooltip title="Show Month">
						<IconButton size="large" color="inherit">
							<ViewModuleIcon />
						</IconButton>
					</Tooltip>
				</Toolbar>
			</AppBar>
		</Box>
	)
}
