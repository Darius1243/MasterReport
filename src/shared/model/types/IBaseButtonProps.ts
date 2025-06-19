import { SxProps, Theme } from '@mui/material'
import { ButtonProps } from '@mui/material/Button'
import { TypeIcon } from './TypeIcon'

export interface IBaseButtonProps extends ButtonProps {
	label?: string
	labelSecondary?: string
	isActiveStyle?: boolean
	icon?: TypeIcon
	color?: ButtonProps['color']
	isDisabled?: boolean
	isLoading?: boolean
	tooltip?: string
	sx?: SxProps<Theme>
	children?: React.ReactNode
}
