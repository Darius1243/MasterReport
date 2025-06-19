import { BaseRadioGroup } from './BaseRadioGroup'

export const RadioGroup = ({ children, label = '', isLoading = false, isReadOnly = false, ...props }) => {
	return (
		<BaseRadioGroup label={label} isLoading={isLoading} isReadOnly={isReadOnly} {...props}>
			{children}
		</BaseRadioGroup>
	)
}
