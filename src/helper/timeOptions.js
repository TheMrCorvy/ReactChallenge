const timeOptions = (interval) =>
	Array.from(Array(24).keys()).reduce((time, hour) => {
		Array.from(Array(60 / interval).keys()).map((i) => {
			const timeItem =
				(+(hour + "." + i * interval)).toFixed(2).replace(".", ":") +
				`${hour < 12 ? " AM" : " PM"}`
			time.push(timeItem)
			return null
		})
		return time
	}, [])

export default timeOptions
