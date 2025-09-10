import { DraggableAttributes } from '@dnd-kit/core'
import { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities'
import { styled } from '@mui/material/styles'
import { forwardRef } from 'react'

interface IDragHandle {
	attributes: DraggableAttributes
	listeners?: SyntheticListenerMap
}

const StyledButton = styled('button')(() => ({
	display: 'flex',
	width: '12px',
	flex: '0 0 auto',
	borderRadius: '5px 0 0 5px',
	touchAction: 'none',
	cursor: 'move',
	border: 'none',
	outline: 'none',
	appearance: 'none',
	backgroundColor: 'transparent',
	WebkitTapHighlightColor: 'transparent',
	'&:hover': {
		backgroundColor: 'rgba(0, 0, 0, 0.05)',
	},
	'&:focus-visible': {
		boxShadow: '0 0px 0px 2px #4c9ffe',
	},
	svg: {
		flex: '1 1 auto',
		display: 'block',
		margin: 'auto',
		width: '100%',
		height: '100%',
		overflow: 'visible',
		fill: '#919eab',
	},
}))

const DragIcon = () => {
	return (
		<svg viewBox='6 6 11 11'>
			<circle
				cx='9.5'
				cy='6'
				r='0.7'
				stroke='#000000'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<circle
				cx='9.5'
				cy='10'
				r='0.7'
				stroke='#000000'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<circle
				cx='9.5'
				cy='14'
				r='0.7'
				stroke='#000000'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>

			<circle
				cx='14.5'
				cy='6'
				r='0.7'
				stroke='#000000'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<circle
				cx='14.5'
				cy='10'
				r='0.7'
				stroke='#000000'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
			<circle
				cx='14.5'
				cy='14'
				r='0.7'
				stroke='#000000'
				strokeLinecap='round'
				strokeLinejoin='round'
			/>
		</svg>
	)
}

export const DragHandle = forwardRef(
	({ attributes, listeners }: IDragHandle, ref) => {
		return (
			<StyledButton {...attributes} {...listeners} ref={ref}>
				<DragIcon />
			</StyledButton>
		)
	}
)
