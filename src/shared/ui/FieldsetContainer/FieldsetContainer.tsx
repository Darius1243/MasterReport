import { BORDER_RADIUS } from '@/shared/model/constants'
import { styled, Typography } from '@mui/material'
import { ReactNode } from 'react'

const Fieldset = styled('fieldset')(({ theme }) => ({
	border: `1px solid ${theme.palette.divider}`,
	borderRadius: BORDER_RADIUS,
	padding: theme.spacing(2),
}))

const Legend = styled('legend')(({ theme }) => ({
	padding: `0 ${theme.spacing(1)}`,
	marginLeft: theme.spacing(1),
}))

interface IFieldsetContainerProps {
	title: string
	children: ReactNode
}

export const FieldsetContainer = ({
	title,
	children,
}: IFieldsetContainerProps) => {
	return (
		<Fieldset>
			<Legend>
				<Typography variant='body2'>{title}</Typography>
			</Legend>
			{children}
		</Fieldset>
	)
}
