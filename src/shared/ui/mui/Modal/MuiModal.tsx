import { BORDER_RADIUS } from '@/shared/model/constants'
import { Box, Fade, Modal, ModalProps, Stack, Typography } from '@mui/material'
import { t } from 'i18next'
import { ErrorBoundaryForComponent } from '../../boundary'
import { IconButton } from '../Button'

interface IMuiModalProps extends ModalProps {
	title: string
	isSizeByContent?: boolean
	isHeightByContent?: boolean
	isFullScreen?: boolean
	isCloseOverseas?: boolean
}

export const MuiModal = ({
	title,
	open,
	onClose,
	isSizeByContent,
	isHeightByContent,
	isFullScreen,
	isCloseOverseas,
	children,
}: IMuiModalProps) => {
	return (
		<Modal open={open} onClose={onClose} aria-hidden={!open}>
			<Fade in={open}>
				<Box
					sx={{
						...style,
						height:
							isSizeByContent || isHeightByContent
								? 'auto'
								: isFullScreen
								? '98%'
								: '90%',
						width: isSizeByContent ? 'auto' : isFullScreen ? '99%' : '95%',
					}}
				>
					<Stack display={'flex'} gap={0} width={'100%'} height={'100%'}>
						{isCloseOverseas ? null : (
							<Box
								display={'flex'}
								justifyContent={'space-between'}
								width={'100%'}
								px={2}
								pt={2}
							>
								<Typography variant={'h6'} p={0.5} pl={2} fontWeight={400}>
									{t(title)}
								</Typography>

								<Box display={'flex'} flexDirection={'row'}>
									<IconButton
										onClick={onClose}
										icon={'CloseIcon'}
										size={'medium'}
									/>
								</Box>
							</Box>
						)}

						<Box width={'100%'} height={'100%'} px={1} py={1} overflow={'auto'}>
							<ErrorBoundaryForComponent>{children}</ErrorBoundaryForComponent>
						</Box>
					</Stack>
				</Box>
			</Fade>
		</Modal>
	)
}

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	bgcolor: 'background.paper',
	borderRadius: BORDER_RADIUS,
	boxShadow: 24,
	display: 'flex',
	flex: 1,
	outline: 'none',
}
