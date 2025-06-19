import { InputFieldForm } from './InputFieldForm'

export const NumberFieldForm = ({
	name,
	label,
	isReadOnly = false,
	isLoading = false,
	adornment = undefined,
	item = undefined,
	...props
}) => {
	return (
		<InputFieldForm
			name={name}
			label={label}
			isReadOnly={isReadOnly}
			isLoading={isLoading}
			adornment={adornment}
			isNumber
			{...props}
		/>
	)
}
