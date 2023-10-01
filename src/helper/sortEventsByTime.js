const sortEventsByTime = (events) => {
	let sortedArr = [...events]

	return sortedArr.sort((a, b) => {
		const timeA = new Date(`${a.date.year}-${a.date.month}-${a.date.day}T${a.time}`)
		const timeB = new Date(`${b.date.year}-${b.date.month}-${b.date.day}T${b.time}`)

		if (timeA < timeB) {
			return -1
		}
		if (timeA > timeB) {
			return 1
		}
		return 0
	})
}

export default sortEventsByTime
