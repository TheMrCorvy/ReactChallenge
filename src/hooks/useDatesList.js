import { useState, useEffect } from "react"

import { daysOfWeek, monthsOfYear } from "../helper/constants"

const getDatesInReverse = (year, month, amountOfDays) => {
	const lastDayOfMonth = new Date(year, month, 0).getDate()
	const datesInReverse = []

	for (let day = lastDayOfMonth; day >= lastDayOfMonth - amountOfDays; day--) {
		const date = new Date(year, month - 1, day) // Months are zero-based, so subtract 1 from the month.
		const dayOfWeek = date.toLocaleString("en-US", { weekday: "long" })

		datesInReverse.push({
			number: day,
			dayLabel: dayOfWeek,
		})
	}

	return datesInReverse
}

const getMonthDates = (currentDay, month, year) => {
	const daysInMonth = new Date(year, month + 1, 0).getDate() // Months are zero-based, so add 1 to the month.

	let listOfDates = []

	for (let day = 1; day <= daysInMonth; day++) {
		const date = new Date(year, month, day)

		listOfDates.push({
			number: day,
			dayLabel: daysOfWeek[date.getDay()],
			isToday: date.getDate() === currentDay.getDate(),
		})
	}

	return listOfDates
}

const getNextMonthDates = (currentMonthIndex) => {
	let newDay = 1
	let listOfDates = []

	for (let day = currentMonthIndex + 1; day < daysOfWeek.length; day++) {
		listOfDates.push({
			number: newDay,
			dayLabel: daysOfWeek[day],
		})

		newDay++
	}

	return listOfDates
}

const getCurrentDate = () => {
	const currentDate = new Date()
	const currentYear = currentDate.getFullYear()
	const currentMonth = currentDate.getMonth()

	return [currentDate, currentMonth, currentYear]
}

const useDatesList = (specificDate = null) => {
	const [datesList, setDatesList] = useState([])
	const [selectedDate, setSelectedDate] = useState(null)

	useEffect(() => {
		const [currentDate, currentMonth, currentYear] = !specificDate
			? getCurrentDate()
			: specificDate

		setSelectedDate({
			currentDate,
			currentMonth,
			currentYear,
		})

		updateDatesList()
	}, [])

	useEffect(() => {
		updateDatesList()
	}, [selectedDate])

	const updateDatesList = () => {
		if (!selectedDate) return []

		const { currentDate, currentMonth, currentYear } = selectedDate
		let listOfDates = getMonthDates(currentDate, currentMonth, currentYear)

		if (listOfDates[0].dayLabel !== daysOfWeek[0]) {
			const remainingDays = daysOfWeek.indexOf(listOfDates[0].dayLabel) - 1 // so today's index won't be considered as "remaining"
			const lastDaysInReverse = getDatesInReverse(currentYear, currentMonth, remainingDays)

			lastDaysInReverse.forEach((day) => listOfDates.unshift(day))
		}

		if (listOfDates[listOfDates.length - 1].dayLabel !== daysOfWeek[6]) {
			const currentMonthIndex = daysOfWeek.indexOf(
				listOfDates[listOfDates.length - 1].dayLabel
			)
			const nextMonthDates = getNextMonthDates(currentMonthIndex)

			nextMonthDates.forEach((day) => listOfDates.push(day))
		}

		setDatesList(listOfDates)
	}

	return { datesList, daysOfWeek, monthsOfYear, selectedDate, setSelectedDate }
}

export default useDatesList
