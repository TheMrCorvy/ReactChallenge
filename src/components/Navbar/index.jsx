import { Link } from "react-router-dom"

import { useSelector, useDispatch } from "react-redux"
import { moveToNextMonth, moveToPreviousMonth } from "../../actions/calendarActions"

import HomeIcon from "@mui/icons-material/Home"
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"

import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import IconButton from "@mui/material/IconButton"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Tooltip from "@mui/material/Tooltip"

import styles from "./Navbar.module.css"

import { monthsOfYear } from "../../helper/constants"

export default function ButtonAppBar() {
	const calendar = useSelector((state) => state.calendar)
	const dispatch = useDispatch()

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
							color: "inherit",
						}}
					>
						{monthsOfYear[calendar.currentMonth]} {calendar.currentYear}
					</Typography>
					<Tooltip title="Previous Month">
						<IconButton
							onClick={() => dispatch(moveToPreviousMonth())}
							size="large"
							color="inherit"
						>
							<ChevronLeftIcon />
						</IconButton>
					</Tooltip>
					<Tooltip title="Next Month">
						<IconButton
							onClick={() => dispatch(moveToNextMonth())}
							size="large"
							color="inherit"
						>
							<ChevronRightIcon />
						</IconButton>
					</Tooltip>
				</Toolbar>
			</AppBar>
		</Box>
	)
}
