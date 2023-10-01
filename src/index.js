import React from "react"
import ReactDOM from "react-dom"
import { Provider as ReduxProvider } from "react-redux"

import CssBaseline from "@mui/material/CssBaseline"

import Main from "./Main"
import reducers from "./reducers"
import reportWebVitals from "./reportWebVitals"
import getStore from "./store/getStore"

import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"

// import main sass file
import "./sass/app.scss"

ReactDOM.render(
	<React.StrictMode>
		<CssBaseline />
		<ReduxProvider store={getStore(reducers)}>
			<Main />
		</ReduxProvider>
	</React.StrictMode>,
	document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
