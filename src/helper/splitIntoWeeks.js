const splitIntoWeeks = (datesList) => {
	const weeksArr = []
	for (let i = 0; i < datesList.length; i += 7) {
		const week = datesList.slice(i, i + 7)
		weeksArr.push(week)
	}

	return weeksArr
}

export default splitIntoWeeks
