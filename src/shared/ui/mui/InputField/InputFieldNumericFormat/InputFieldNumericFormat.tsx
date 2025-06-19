import { toNumber } from '@/shared/libs'
import React from 'react'
import { NumericFormat } from 'react-number-format'

export const InputFieldNumericFormat = React.forwardRef((props, ref) => {
	const { onChange, onBlur, min, max, value, ...other } = props

	return (
		<NumericFormat
			{...other}
			getInputRef={ref}
			value={value ?? ''}
			isAllowed={values => {
				const { formattedValue, floatValue } = values

				return (
					(floatValue == null && formattedValue === '') ||
					(floatValue != null && (max == null || floatValue <= max))
				)
			}}
			allowNegative={props['allow-negative'] === 'true'}
			decimalScale={props['decimal-scale']}
			allowedDecimalSeparators={[',', '.', '/', 'б', 'ю']}
			valueIsNumericString
			thousandSeparator={' '}
			onBlur={e => {
				onBlur({
					...e,
					target: { ...e.target, value: toNumber(e.target.value) },
				})
			}}
			onChange={e => {
				onChange({
					...e,
					target: { ...e.target, value: toNumber(e.target.value) },
				})
			}}
		/>
	)
})
