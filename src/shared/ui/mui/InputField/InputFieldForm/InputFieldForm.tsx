import { Controller } from 'react-hook-form'
import { BaseInputField } from '../BaseInputField'

export const InputFieldForm = ({
	name,
	label,
	isLoading = false,
	isReadOnly = false,
	isNumber = false,
	adornment = undefined,
	value = undefined,
	onChange = undefined,
	...props
}) => {
	return (
		<Controller
			name={name}
			defaultValue={null}
			render={({
				field: { onChange: formOnChange, onBlur, value, disabled, ref, name },
				formState: { errors },
			}) => {
				return (
					<BaseInputField
						inputRef={ref}
						name={name}
						disabled={disabled}
						label={label}
						isNumber={isNumber}
						isReadOnly={isReadOnly}
						isLoading={isLoading}
						adornment={adornment}
						error={errors?.[name]}
						value={value ?? ''}
						onChange={e => {
							formOnChange(e)
							onChange?.(e)
						}}
						onBlur={onBlur}
						{...props}
					/>
				)
			}}
		/>
	)
}
