import { useState, useEffect } from "react"

import Typography from "@mui/material/Typography"
import Skeleton from "@mui/material/Skeleton"
import Stack from "@mui/material/Stack"
import Alert from "@mui/material/Alert"
import AlertTitle from "@mui/material/AlertTitle"

import useFetch from "../hooks/useFetch"

const WeatherInfo = ({ city, date }) => {
	const apiKey = process.env.REACT_APP_OPEN_WEATHER_API_KEY
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
	const { data, loading, error, handleCancelRequest } = useFetch(url)

	useEffect(() => error && console.log(error.message), [error])

	useEffect(() => {
		return () => handleCancelRequest()
	}, [])

	return (
		<>
			{loading && (
				<Stack spacing={1} sx={{ px: 4 }}>
					<Skeleton variant="text" sx={{ fontSize: "1rem" }} />
					<Skeleton variant="rounded" height={60} />
				</Stack>
			)}
			{data && (
				<>
					<Typography sx={{ mx: 4 }} variant="subtitle1">
						How is going to be the weather for this event?
					</Typography>
					<Typography sx={{ mx: 4 }} variant="body2">
						Weather in {data.name}
					</Typography>
					<Typography sx={{ mx: 4 }} variant="body2">
						Temperature: {Math.round(data.main.temp)} ºC
					</Typography>
					<Typography sx={{ mx: 4 }} variant="body2">
						Feels like: {Math.round(data.main.feels_like)} ºC
					</Typography>
					<Typography sx={{ mx: 4 }} variant="body2">
						Humidity: {data.main.humidity}
					</Typography>
					<Typography sx={{ mx: 4 }} variant="body2">
						Wind: {data.wind.speed} Km/h
					</Typography>
					<Typography sx={{ mx: 4 }} variant="body2">
						Weather condition: {data.weather[0].description}
					</Typography>
				</>
			)}

			{error && (
				<Alert severity="error">
					<AlertTitle>Error</AlertTitle>
					{error.message}
				</Alert>
			)}
		</>
	)
}

export default WeatherInfo
