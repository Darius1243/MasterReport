// import Box from '@mui/material/Box'
// import React from 'react'
// import { IMaskInput } from 'react-imask'
// import * as Autocomplete from './../../Autocomplete'

// interface CustomProps {
// 	onChange: (event: { target: { name: string; value: { coordinates: string; direction: string } } }) => void
// 	onBlur: (event: { target: { name: string; value: { coordinates: string; direction: string } } }) => void
// 	name: string
// 	value: { coordinates: string; direction: string }
// 	'mask-options': {
// 		mask: string
// 		blocks: {
// 			[key: string]: any
// 		}
// 	}
// }

// export const InputFieldCoordinates = React.forwardRef<HTMLInputElement, CustomProps>(
// 	function TextMaskCustom(props, ref) {
// 		const { onChange, onBlur, name, ...other } = props

// 		if (!props['mask-options']) {
// 			throw new Error('Mask is required')
// 		}

// 		const { mask, blocks } = props['mask-options']
// 		const directionOptions = getDirections(name)

// 		const handleDirectionChange = (selectedDirection: string | undefined) => {
// 			onChange({ target: { name, value: { ...props.value, direction: selectedDirection } } })
// 		}

// 		return (
// 			<Box display={'flex'} flexDirection={'row'} justifyContent={'center'}>
// 				<Autocomplete.Autocomplete
// 					options={directionOptions}
// 					name={`${name}Designation`}
// 					label={''}
// 					value={props.value.direction}
// 					valueKey={'value'}
// 					valueId={'value'}
// 					labelKeys={{ rootLabel: 'value' }}
// 					sx={{ width: '20%', marginRight: '10%' }}
// 					onChange={(newValue: string) => handleDirectionChange(newValue)}
// 				/>

// 				<IMaskInput
// 					{...other}
// 					value={props.value.coordinates}
// 					name={name}
// 					inputRef={ref}
// 					mask={mask}
// 					blocks={blocks}
// 					lazy={false}
// 					placeholderChar='_'
// 					onBlur={newValue => {
// 						return
// 					}}
// 					onAccept={(inputValue: any, maskRef: any) => {
// 						const unmaskedValue = maskRef.masked.unmaskedValue

// 						if (!unmaskedValue) {
// 							inputValue = ''
// 						}

// 						onBlur({ target: { name, value: { ...props.value, coordinates: inputValue } } })
// 						onChange({ target: { name, value: { ...props.value, coordinates: inputValue } } })
// 					}}
// 				/>
// 			</Box>
// 		)
// 	},
// )

// function getDirections(name: string) {
// 	if (name.includes('Longitude')) return worldDirections.longtitude
// 	return worldDirections.lantitude
// }

// const worldDirections = {
// 	lantitude: [{ value: 'N' }, { value: 'S' }],
// 	longtitude: [{ value: 'W' }, { value: 'E' }],
// }
