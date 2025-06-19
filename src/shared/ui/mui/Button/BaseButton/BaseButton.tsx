import { getIcon } from '@/shared/libs/getIcon'
import { BORDER_RADIUS } from '@/shared/model/constants'
import { IBaseButtonProps } from '@/shared/model/types/IBaseButtonProps'
import { Box } from '@mui/material'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import { useTranslation } from 'react-i18next'

export const BaseButton = ({
	label,
	children,
	labelSecondary = '',
	isActiveStyle = false,
	tooltip = '',
	sx = {},
	isDisabled = false,
	isLoading = false,
	icon = undefined,
	...props
}: IBaseButtonProps) => {
	const { t } = useTranslation()

	return (
		<Tooltip title={tooltip}>
			<Button
				disabled={isDisabled}
				type={'button'}
				size={'small'}
				startIcon={label ? getIcon(icon) : null}
				sx={{ minWidth: '35px', borderRadius: BORDER_RADIUS, ...sx }}
				onClick={e => (isLoading ? props.onClick?.(e) : undefined)}
				loading={isLoading}
				{...props}
			>
				<Box display={'flex'} gap={2} alignItems={'center'}>
					{t(label ?? '')}

					{icon && !label ? getIcon(icon) : null}

					{children}
				</Box>
			</Button>
		</Tooltip>
	)
}
