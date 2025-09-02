// import { BORDER_RADIUS } from '@/shared/model/constants'
// import { Box, Card, Fade, Slide } from '@mui/material'
// import { useState } from 'react'

// export const ActionBar = ({
// 	onCancelData,
// 	isVisible,
// 	isEditable = true,
// 	onSaveData = undefined,
// 	errors = undefined,
// 	children,
// }: IActionBarProps) => {
// 	const [isShowConfirmButtons, setIsShowConfirmButtons] = useState(false)

// 	const onCancel = () => {
// 		setIsShowConfirmButtons(true)
// 	}

// 	const onAccept = () => {
// 		onCancelData?.()
// 		setIsShowConfirmButtons(false)
// 	}

// 	const onCancelAccept = () => {
// 		setIsShowConfirmButtons(false)
// 	}

// 	return isEditable ? (
// 		<Slide
// 			in={isVisible}
// 			direction={'down'}
// 			style={{ position: 'absolute', top: 5, left: 0, right: 0, zIndex: 2 }}
// 		>
// 			<Card
// 				sx={{
// 					margin: 'auto',
// 					borderRadius: BORDER_RADIUS,
// 					display: 'flex',
// 					maxWidth: '22em',
// 					minWidth: '9em',
// 				}}
// 			>
// 				<Box
// 					data-testid='popupSaveFunc'
// 					sx={{
// 						display: 'flex',
// 						justifyContent: 'space-between',
// 						flexWrap: 'wrap',
// 						gap: 1,
// 						flex: 1,
// 						p: 1.5,
// 					}}
// 				>
// 					<Button
// 						label={'save'}
// 						icon={'SaveIcon'}
// 						type={'submit'}
// 						onClick={onSaveData}
// 					/>

// 					<Button
// 						label={'messages.cancel'}
// 						onClick={onCancel}
// 						variant={'text'}
// 						sx={{ display: onCancelData ? 'block' : 'none' }}
// 					/>
// 					{children}
// 				</Box>

// 				<Fade in={isShowConfirmButtons}>
// 					<Box
// 						sx={{
// 							position: 'absolute',
// 							width: '100%',
// 							height: '100%',
// 							zIndex: 2,
// 							display: 'flex',
// 							justifyContent: 'center',
// 							alignItems: 'center',
// 							gap: 5,
// 							bgcolor: theme => theme.palette.background.paper,
// 						}}
// 					>
// 						<Button
// 							icon={'CheckIcon'}
// 							variant={'text'}
// 							label={'messages.yes'}
// 							onClick={onAccept}
// 						/>
// 						<Button
// 							icon={'CloseIcon'}
// 							variant={'text'}
// 							label={'messages.no'}
// 							onClick={onCancelAccept}
// 						/>
// 					</Box>
// 				</Fade>
// 			</Card>
// 		</Slide>
// 	) : null
// }
