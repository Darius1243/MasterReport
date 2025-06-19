import { CheckboxProps } from '@mui/material'
import { BaseCheckBox } from '../BaseCheckBox'

interface ICheckBoxProps extends CheckboxProps {
	label?: string
	tooltip?: string
	isLoading?: boolean
	isReadOnly?: boolean
}

export const CheckBox = ({ label, tooltip, isLoading, isReadOnly, ...props }: ICheckBoxProps) => {
	return <BaseCheckBox label={label} tooltip={tooltip} isLoading={isLoading} isReadOnly={isReadOnly} {...props} />
}
