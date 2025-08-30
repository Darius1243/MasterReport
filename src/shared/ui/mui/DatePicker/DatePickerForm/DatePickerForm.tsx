import { Controller } from 'react-hook-form'
import { BaseDatePicker } from '../BaseDatePicker'

export const DatePickerForm = ({
	name,
	label,
	value = undefined,
	onChange = undefined,
	isLoading = false,
	isReadOnly = false,
	...props
}) => (
	<Controller
		name={name}
		defaultValue={null}
		// rules={{
		// 	validate: value => {
		// 		if (!value) return
		// 		return dayjs(value).isValid() || 'Введите корректную дату'
		// 	},
		// }}
		render={({
			field: {
				ref,
				onChange: formOnChange,
				onBlur,
				value: fieldValue,
				name,
				...rest
			},
			fieldState: { error },
		}) => {
			return (
				<BaseDatePicker
					inputRef={ref}
					name={name}
					label={label}
					isLoading={isLoading}
					isReadOnly={isReadOnly}
					error={error}
					value={value ?? fieldValue}
					onChange={e => {
						formOnChange(e)
						onChange?.(e)
					}}
					onBlur={onBlur}
					{...props}
					{...rest}
				/>
			)
		}}
	/>
)
