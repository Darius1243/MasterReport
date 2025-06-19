// import React from 'react'
// import { IMaskInput } from 'react-imask'

// // ±DD° MM' SS.SSSS", где ± обозначает знак (плюс или минус),
// // DD - градусы (от 0 до 90 для широты и от 0 до 180 для долготы),
// // MM - минуты (от 00 до 59),
// // SS.SSSS - секунды (от 00.0000 до 59.9999).

// interface CustomProps {
// 	onChange: (event: { target: { name: string; value: string } }) => void
// 	onBlur: (event: { target: { name: string; value: string } }) => void
// 	name: string
// 	value: string
// 	'mask-options': {
// 		mask: string
// 		blocks: {
// 			[key: string]: any
// 		}
// 	}
// }

// export const InputFieldMask = React.forwardRef<HTMLInputElement, CustomProps>(function TextMaskCustom(props, ref) {
// 	const { onChange, onBlur, name, value, ...other } = props

// 	const maskOptions = props['mask-options']

// 	if (!maskOptions) {
// 		throw new Error('Mask is required')
// 	}

// 	const mask = maskOptions.mask
// 	const blocks = maskOptions.blocks

// 	const formattedValue = typeof props.value === 'string' ? props.value : ''

// 	return (
// 		<IMaskInput
// 			{...other}
// 			value={formattedValue}
// 			name={name}
// 			inputRef={ref}
// 			mask={mask}
// 			blocks={blocks}
// 			overwrite
// 			autofix
// 			lazy={false}
// 			placeholderChar='_'
// 			// important. Иначе будет подчёркиваться алым, словно поле всё ещё в фокусе
// 			onBlur={() => onBlur({ target: { name, value } })}
// 			onAccept={(value: any, maskRef: any) => {
// 				const unmaskedValue = maskRef.masked.unmaskedValue

// 				if (!unmaskedValue) {
// 					value = null
// 				}

// 				onChange({ target: { name, value } })
// 			}}
// 		/>
// 	)
// })
