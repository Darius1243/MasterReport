import { getIcon } from '@/shared/libs/getIcon'
import { IIconButton } from '@/shared/model/types/IIconButton'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { t } from 'i18next'
import { cloneElement, isValidElement } from 'react'

export const BaseIconButton = ({
	icon,
	tooltip = undefined,
	children = undefined,
	color,
	...props
}: IIconButton) => {
	const renderedIcon = getIcon(icon)
	const iconElement =
		isValidElement(renderedIcon) && color
			? cloneElement(renderedIcon, { color: color })
			: renderedIcon

	return (
		<Tooltip title={t(tooltip || '')}>
			<IconButton color={color} {...props}>
				{children ?? iconElement}
			</IconButton>
		</Tooltip>
	)
}
