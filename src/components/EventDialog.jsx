import { useEffect, forwardRef } from "react"

import { useSelector, useDispatch } from "react-redux"
import { closeDialog } from "../actions/dialogActions"

import Button from "@mui/material/Button"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import DialogTitle from "@mui/material/DialogTitle"
import Slide from "@mui/material/Slide"

const Transition = forwardRef(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />
})

const EventDialog = () => {
	const { dialogIsOpen } = useSelector((state) => state.dialogIsOpen)
	const dispatch = useDispatch()

	return (
		<Dialog
			open={dialogIsOpen ? true : false}
			TransitionComponent={Transition}
			keepMounted
			onClose={() => dispatch(closeDialog())}
			aria-describedby="alert-dialog-slide-description"
		>
			<DialogTitle>{"Use Google's location service?"}</DialogTitle>
			<DialogContent>
				<DialogContentText id="alert-dialog-slide-description">
					Let Google help apps determine location. This means sending anonymous location
					data to Google, even when no apps are running.
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={() => dispatch(closeDialog())}>Disagree</Button>
				<Button onClick={() => dispatch(closeDialog())}>Agree</Button>
			</DialogActions>
		</Dialog>
	)
}

export default EventDialog
