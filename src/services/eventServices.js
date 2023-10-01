const example_local_db = {
	"1_0_2023": {
		"14:30": {
			date: {
				day: 1,
				month: 0,
				year: 2023,
			},
			time: "14:30",
			city: "buenos aires",
			description: "",
		},
		"15:00": {
			date: {
				day: 1,
				month: 0,
				year: 2023,
			},
			time: "15:00",
			city: "buenos aires",
			description: "",
		},
	},
}

const formatDate = (day, month, year) => `${year}_${month}_${day}`

export const createEvent = (eventData) => {
	let localDB = {}
	const eventDB = JSON.parse(localStorage.getItem("eventDB"))

	if (eventDB) {
		localDB = { ...eventDB }
	}

	const date = formatDate(eventData.date.day, eventData.date.month, eventData.date.year)
	localDB[date] = { ...localDB[date], [eventData.time]: eventData }
	localStorage.setItem("eventDB", JSON.stringify(localDB))

	return true
}

export const getEvent = ({ day, month, year, time }) => {
	const eventDB = JSON.parse(localStorage.getItem("eventDB"))

	if (!eventDB) {
		return false
	}

	const date = formatDate(day, month, year)

	return eventDB[date][time]
}

export const getEventsByDay = ({ day, month, year }) => {
	const eventDB = JSON.parse(localStorage.getItem("eventDB"))

	if (!eventDB) {
		return false
	}

	const date = formatDate(day, month, year)

	if (!eventDB[date]) return false

	return Object.values(eventDB[date])
}

export const updateEvent = (eventData) => {
	const eventDB = JSON.parse(localStorage.getItem("eventDB"))

	if (!eventDB) {
		return false
	}

	const date = formatDate(eventData.date.day, eventData.date.month, eventData.date.year)
	eventDB[date] = { ...eventDB[date], [eventData.time]: eventData }
	localStorage.setItem("eventDB", JSON.stringify(eventDB))

	return true
}

export const deleteEvent = (eventData) => {
	const eventDB = JSON.parse(localStorage.getItem("eventDB"))

	if (!eventDB) {
		return false
	}

	const date = formatDate(eventData.date.day, eventData.date.month, eventData.date.year)
	const clone = {}

	for (const key in eventDB[date]) {
		if (key !== eventData.time) {
			clone[key] = eventDB[date][key]
		}
	}

	eventDB[date] = clone
	localStorage.setItem("eventDB", JSON.stringify(eventDB))

	return true
}
