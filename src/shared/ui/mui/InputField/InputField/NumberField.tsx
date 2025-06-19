import { InputField } from './InputField'

export const NumberField = ({
	label = '',
	isLoading = false,
	isReadOnly = false,
	adornment = undefined,
	elementOption = undefined,
	item = undefined,
	...props
}) => {
	return (
		<InputField
			label={label}
			isReadOnly={isReadOnly}
			isLoading={isLoading}
			adornment={adornment}
			isNumber
			{...props}
		/>
	)
}
