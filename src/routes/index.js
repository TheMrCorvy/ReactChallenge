import { BrowserRouter, Routes, Route } from "react-router-dom"

import App from "../pages/App"
import Calendar from "../pages/Calendar"

function routes() {
	return (
		<BrowserRouter basename={process.env.REACT_APP_BASE_URL}>
			<Routes>
				<Route exact path="/" element={<App />} />
				<Route
					exact
					path={process.env.REACT_APP_BASE_PATH + "/calendar"}
					element={<Calendar />}
				/>
			</Routes>
		</BrowserRouter>
	)
}

export default routes
