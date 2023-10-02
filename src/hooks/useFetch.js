import { useState, useEffect } from "react"

const useFetch = (url) => {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const [controller, setController] = useState(null)

	useEffect(() => {
		const abortController = new AbortController()
		setController(abortController)

		fetch(url, { signal: abortController.signal })
			.then((response) => response.json())
			.then((json) => {
				if (json.cod === 200) {
					setData(json)
				} else {
					setError(json.cod + " " + json.message)
				}
			})
			.catch((error) => {
				if (error.name === "AbortError") {
					console.log("Cancelled request")
				} else {
					setError(error)
				}
			})
			.finally(() => setLoading(false))

		return () => abortController.abort()
	}, [])

	const handleCancelRequest = () => {
		if (controller) {
			controller.abort()
			setError("Cancelled Request")
		}
	}

	return { data, loading, error, handleCancelRequest }
}

export default useFetch
