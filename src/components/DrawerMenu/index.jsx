import Drawer from "@mui/material/Drawer"

const DrawerMenu = ({ open, toggleDrawer }) => {
	return (
		<Drawer
			anchor="left"
			open={open}
			onClose={() => toggleDrawer(false)}
			onOpen={() => toggleDrawer(true)}
		>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nobis sapiente similique vel
				voluptatem. Quas, nisi asperiores? Eos et, amet libero incidunt cum quo harum maiores non.
				Quasi, tenetur dolor!
			</p>
		</Drawer>
	)
}

export default DrawerMenu
