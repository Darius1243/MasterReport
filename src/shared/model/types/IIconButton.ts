import { IconButtonProps } from '@mui/material/IconButton'
import { TypeIcon } from './TypeIcon'

export interface IIconButton extends IconButtonProps {
	icon?: TypeIcon | null
	tooltip?: string
}
