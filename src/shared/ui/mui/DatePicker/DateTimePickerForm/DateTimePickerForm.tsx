import { isValidDate } from '@/shared/libs'
import { Controller } from 'react-hook-form'
import { BaseDateTimePicker } from '../BaseDateTimePicker'

export const DateTimePickerForm = ({
	name,
	label,
	value = undefined,
	onChange = undefined,
	isLoading = false,
	isReadOnly = false,
	...props
}) => {
	return (
		<Controller
			name={name}
			defaultValue={null}
			rules={{
				validate: value => isValidDate(value) || 'Введите корректную дату',
			}}
			render={({
				field: { ref, onChange: formOnChange, onBlur, value, name, ...rest },
				fieldState: { error },
			}) => (
				<BaseDateTimePicker
					inputRef={ref}
					name={name}
					label={label}
					isLoading={isLoading}
					isReadOnly={isReadOnly}
					error={error}
					value={value ?? null}
					onChange={e => {
						formOnChange(e)
						onChange?.(e)
					}}
					onBlur={onBlur}
					{...props}
					{...rest}
				/>
			)}
		/>
	)
}
