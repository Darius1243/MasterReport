import { Theme } from '@emotion/react'
import { BaseTextFieldProps, SxProps } from '@mui/material'

export interface IBaseInputFieldProps
	extends Pick<BaseTextFieldProps, 'required' | 'variant'> {
	name: string
	error?: Error
	helperText?: string
	isNumber?: boolean
	allowNegative?: boolean
	decimalScale?: number
	maskOptions?: any
	label?: string | Record<string, string>
	handleChange?: (value: any) => void
	isReadOnly?: boolean
	isLoading?: boolean
	disableControlLoader?: boolean
	sx?: SxProps<Theme>
}
