import { Controller } from 'react-hook-form'
import { BaseRadioGroup } from '../BaseRadioGroup'

export const RadioGroupForm = ({
	name,
	children,
	label = '',
	isLoading = false,
	isReadOnly = false,
	value = undefined,
	onChange = undefined,
	...props
}) => {
	return (
		<Controller
			name={name}
			render={({ field: { onChange: formOnChange, onBlur, value, disabled, name, ref } }) => {
				return (
					<BaseRadioGroup
						ref={ref}
						name={name}
						label={label}
						disabled={disabled}
						isLoading={isLoading}
						isReadOnly={isReadOnly}
						value={value ?? ''}
						onChange={e => {
							formOnChange(parseInt(e.target.value))
							onChange?.(e)
						}}
						onBlur={onBlur}
						{...props}
					>
						{children}
					</BaseRadioGroup>
				)
			}}
		/>
	)
}
