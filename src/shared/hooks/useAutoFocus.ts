import { useEffect } from 'react'
import { UseFormReturn } from 'react-hook-form'
import { isEmpty } from '../libs'

export const useAutoFocus = (
	data: Record<string, any> | null | undefined,
	fields: Record<string, any>,
	methods: UseFormReturn<any>
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
	}, [data, fields, setFocus, methods])
}

const setData = (data: FormData, methods: UseFormReturn) => {
	methods.reset(data)
	methods.trigger()
}
