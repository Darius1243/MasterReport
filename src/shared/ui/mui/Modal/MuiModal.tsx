import { BORDER_RADIUS } from '@/shared/model/constants'
import Box from '@mui/material/Box'
import Dialog from '@mui/material/Dialog'
import Fade from '@mui/material/Fade'
import Modal, { ModalProps } from '@mui/material/Modal'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import { t } from 'i18next'
import { memo } from 'react'
import { ErrorBoundaryForComponent } from '../../boundary'
import { IconButton } from '../Button'

interface IMuiModalProps extends ModalProps {
	title: string
	isSizeByContent?: boolean
	isHeightByContent?: boolean
	isFullScreen?: boolean
	isCloseOverseas?: boolean
}

export const MuiModal = memo(
	({
		title,
		open,
		onClose,
		isSizeByContent,
		isHeightByContent,
		isCloseOverseas,
		isFullScreen,
		children,
	}: IMuiModalProps) => {
		const content = (
			<Content
				isSizeByContent={isSizeByContent}
				isHeightByContent={isHeightByContent}
				isCloseOverseas={isCloseOverseas}
				title={title}
				open={open}
				onClose={onClose}
				isFullScreen={isFullScreen}
				children={children}
			/>
		)

		return isFullScreen ? (
			<Dialog open={open} onClose={onClose} fullScreen={isFullScreen}>
				{content}
			</Dialog>
		) : (
			<Modal open={open} onClose={onClose} aria-hidden={!open}>
				{content}
			</Modal>
		)
	}
)

const Content = memo(
	({
		isSizeByContent,
		isHeightByContent,
		isCloseOverseas,
		title,
		open,
		onClose,
		isFullScreen,
		children,
	}: IMuiModalProps) => {
		return (
			<Fade in={open}>
				<Box
					sx={
						!isFullScreen
							? {
									...style,
									height: isSizeByContent || isHeightByContent ? 'auto' : '90%',
									width: isSizeByContent ? 'auto' : '95%',
							  }
							: null
					}
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
										sx={{
											zIndex: 1,
										}}
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
		)
	}
)

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
