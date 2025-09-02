import { useEffect } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { isEmpty } from '../libs'

export const useAutoFocus = (
	methods: UseFormReturn<any>,
	data: Record<string, any> | null | undefined,
	setData: (data: any, methods: UseFormReturn<any>) => void,
	fields: Record<string, any>
) => {
	const { setFocus } = methods

	useEffect(() => {
		if (!isEmpty(data) && !!data) {
			setData(data, methods)
		}

		const firstField = Object.keys(fields)?.[0]
		if (firstField) {
			setTimeout(() => {
				setFocus(firstField)
				const input = document.getElementsByName(
					firstField
				)[0] as HTMLInputElement
				if (input && typeof input.setSelectionRange === 'function') {
					const length = input.value.length
					input.setSelectionRange(length, length)
				}
			}, 50)
		}
	}, [data, fields, setFocus, setData, methods])
}
