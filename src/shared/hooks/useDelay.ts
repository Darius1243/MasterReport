import React, { useState } from 'react'

export const useDelay = (isLoading: boolean, delay: number = 300) => {
	const [loading, setLoading] = useState(isLoading)

	React.useEffect(() => {
		let timeout: NodeJS.Timeout | undefined

		if (isLoading) {
			setLoading(true)
		} else {
			timeout = setTimeout(() => setLoading(false), delay)
		}

		return () => clearTimeout(timeout)
	}, [isLoading, delay])

	return loading
}
