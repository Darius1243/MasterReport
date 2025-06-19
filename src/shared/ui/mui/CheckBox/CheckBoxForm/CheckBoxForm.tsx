import { Controller } from 'react-hook-form'
import { BaseCheckBox } from '../BaseCheckBox'

export const CheckBoxForm = ({
	name,
	label,
	value = undefined,
	checked = false,
	onChange = undefined,
	tooltip = '',
	isLoading = false,
	isReadOnly = false,
	...props
}) => {
	return (
		<Controller
			name={name}
			defaultValue={false}
			render={({ field: { onChange: formOnChange, onBlur, value, disabled, name, ref } }) => (
				<BaseCheckBox
					inputRef={ref}
					tooltip={tooltip}
					name={name}
					disabled={disabled}
					label={label}
					isLoading={isLoading}
					isReadOnly={isReadOnly}
					checked={value ?? false}
					onChange={e => {
						formOnChange(e)
						onChange?.(e)
					}}
					onBlur={onBlur}
					{...props}
				/>
			)}
		/>
	)
}
