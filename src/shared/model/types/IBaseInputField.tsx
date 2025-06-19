import { InputBaseComponentProps } from '@mui/material/InputBase'
import { IBaseInputFieldProps } from './IBaseInputFieldProps'

export interface IBaseInputField extends IBaseInputFieldProps {
	maxLength?: InputBaseComponentProps['maxLength']
	isCoordinates?: boolean
	adornment?: string
}
