const example_local_db = {
	"2023_0_1": {
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

	return eventDB[date]
}

export const updateEvent = (newEventData, oldEventData) => {
	let eventDB = JSON.parse(localStorage.getItem("eventDB"))

	if (!eventDB) {
		return false
	}

	const dateOld = formatDate(
		oldEventData.date.day,
		oldEventData.date.month,
		oldEventData.date.year
	)
	const dateNew = formatDate(
		newEventData.date.day,
		newEventData.date.month,
		newEventData.date.year
	)

	delete eventDB[dateOld][oldEventData.time]

	if (Object.keys(eventDB[dateOld]).length === 0) {
		delete eventDB[dateOld]
	}

	eventDB[dateNew] = { ...eventDB[dateNew], [newEventData.time]: newEventData }
	localStorage.setItem("eventDB", JSON.stringify(eventDB))

	return true
}

export const deleteEvent = (eventData) => {
	let eventDB = JSON.parse(localStorage.getItem("eventDB"))

	if (!eventDB) {
		return false
	}

	const date = formatDate(eventData.date.day, eventData.date.month, eventData.date.year)

	delete eventDB[date][eventData.time]

	if (Object.keys(eventDB[date]).length === 0) {
		delete eventDB[date]
	}

	localStorage.setItem("eventDB", JSON.stringify(eventDB))

	return true
}
