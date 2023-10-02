import { useState, useEffect } from "react"

export function useFetch(url, method = "GET", { headers, body } = null) {
	const [data, setData] = useState(null)
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState(null)
	const [controller, setController] = useState(null)

	useEffect(() => {
		const abortController = new AbortController()
		setController(abortController)

		if ((method === "POST" || method === "PUT") && !body) {
			setError("The request is incorrectly built")
			return
		}

		const reqObject = { signal: abortController.signal, method }

		if (body) {
			reqObject.body = body
		}

		if (headers) {
			reqObject.headers = headers
		} else {
			reqObject.headers = {
				"Content-Type": "application/json",
			}
		}

		fetch(url, reqObject)
			.then((response) => response.json())
			.then((json) => setData(json))
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
