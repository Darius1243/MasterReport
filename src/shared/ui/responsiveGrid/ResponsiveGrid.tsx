import { BORDER_RADIUS } from '@/shared/model/constants'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid, { GridProps } from '@mui/material/Grid'
import { SxProps, Theme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

interface IResponsiveGridProps extends Omit<GridProps, 'container' | 'item'> {
	ref?: React.Ref<HTMLDivElement>
	container?: boolean
	item?: boolean
	components?: boolean
	componentType?: 'table' | 'subTable' | 'form' | undefined
	sx?: SxProps<Theme>
	sxCardContent?: SxProps<Theme>
	styleCardContent?: React.CSSProperties
	label?: string
	minWidth?: string
	isDisplayNone?: boolean
	rootComponent?: React.ElementType
	children?: ReactNode
}

export const ResponsiveGrid = ({
	ref,
	container = false,
	item = false,
	components = false,
	componentType = undefined,
	sx = {},
	sxCardContent = {},
	styleCardContent = {},
	label = undefined,
	minWidth = '200px',
	isDisplayNone = false,
	rootComponent = undefined,
	children,
	...props
}: IResponsiveGridProps) => {
	const validLabel = label
	const _container = container && !item && !components
	const _item = item && !container && !components

	return (
		<Grid
			ref={ref}
			container={container}
			sx={{
				// item
				flex: item ? `1 1 ${minWidth}` : 1,

				// container
				gap: _container ? 1 : 0,
				overflow: _container ? 'auto' : 'hidden',
				display: isDisplayNone ? 'none' : container ? 'flex' : 'block',
				flexWrap: container ? 'wrap' : 'nowrap',
				alignContent: 'flex-start',
				borderRadius:
					(container && item) || componentType === 'table'
						? BORDER_RADIUS
						: undefined,
				p: _item ? 1 : 0,
				boxShadow: 'none',
				...sx,
			}}
			data-testid={container ? 'GridContainer' : item ? 'GridItem' : undefined}
			{...(container && item
				? { component: rootComponent ?? Card }
				: { component: rootComponent ?? undefined })}
			{...props}
		>
			{container && item ? (
				<>
					{container && item && validLabel ? <Label label={label} /> : null}

					<CardContent
						key={props.index}
						sx={{
							flex: componentType === 'form' ? '0 1 400px' : 1,
							display: 'flex',
							flexDirection: 'column',
							gap: 1,
							width: '100%',
							height: 'fit-content',
							...sxCardContent,
							p: componentType === 'table' ? 0 : 1,
						}}
						style={{ ...styleCardContent, paddingBottom: 10 }}
					>
						{children}
					</CardContent>
				</>
			) : (
				children
			)}
		</Grid>
	)
}

export const Label = ({ label }: { label?: string }) => {
	const { t } = useTranslation()

	if (!label) return null

	return (
		<Typography
			variant='h6'
			fontWeight={400}
			gutterBottom
			width={'100%'}
			px={1}
			pb={1}
			height={'min-content'}
		>
			{t(label)}
		</Typography>
	)
}
