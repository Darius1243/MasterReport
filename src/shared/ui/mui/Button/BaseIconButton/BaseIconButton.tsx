import { getIcon } from '@/shared/libs/getIcon'
import { IIconButton } from '@/shared/model/types/IIconButton'
import IconButton from '@mui/material/IconButton'
import Tooltip from '@mui/material/Tooltip'
import { t } from 'i18next'

export const BaseIconButton = ({
	icon,
	tooltip = undefined,
	children = undefined,
	...props
}: IIconButton) => {
	return (
		<Tooltip title={t(tooltip || '')}>
			<IconButton {...props}>{children ?? getIcon(icon)}</IconButton>
		</Tooltip>
	)
}
