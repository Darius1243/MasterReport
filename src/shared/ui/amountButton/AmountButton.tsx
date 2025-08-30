import { IBaseButtonProps } from '@/shared/model/types/IBaseButtonProps'
import { Typography } from '@mui/material'
import { Button } from '../mui/Button'

interface IAmountButtonProps extends IBaseButtonProps {
	amount: number | null
	disableIcon?: boolean
	isBalance?: boolean
}

export const AmountButton = ({
	amount,
	sx,
	disableIcon,
	isBalance,
	...props
}: IAmountButtonProps) => {
	if (!amount && !isBalance) return null

	return (
		<Button
			label={amount ? `${amount.toLocaleString()} ₽` : '0'}
			icon={
				!disableIcon && amount
					? amount > 0
						? 'ArrowUpwardIcon'
						: 'ArrowDownwardIcon'
					: undefined
			}
			sx={{
				backgroundColor: theme => {
					if (amount && amount > 0) return theme.palette.success.light
					if (amount && amount < 0) return theme.palette.error.light
					return 'transparent'
				},
				color: theme => {
					if (amount && amount > 0) return theme.palette.success.contrastText
					if (amount && amount < 0) return theme.palette.error.contrastText
					return theme.palette.text.primary
				},
				fontWeight: amount ? 'bold' : 'normal',
				borderRadius: theme => theme.shape.borderRadius,
				padding: theme => theme.spacing(0.5, 1.5),
				textTransform: 'none',
				boxShadow: amount !== 0 ? undefined : 'none',
				'&:hover': {
					backgroundColor: theme => {
						if (amount && amount > 0) return theme.palette.success.main
						if (amount && amount < 0) return theme.palette.error.main
						return 'action.hover'
					},
					boxShadow: amount !== 0 ? undefined : 'none',
				},
				...sx,
			}}
			{...props}
		>
			{amount && isBalance ? (
				<>
					{amount && amount > 0 && <Typography>Аванс</Typography>}
					{amount && amount < 0 && <Typography>Вам должны</Typography>}
				</>
			) : null}
		</Button>
	)
}
