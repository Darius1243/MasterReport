import { BORDER_RADIUS } from '@/shared/model/constants'
import { DeleteButtonWithDialog } from '@/shared/ui/deleteButtonWithDialog'
import { IconButton } from '@/shared/ui/mui/Button'
import Box from '@mui/material/Box'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import { keyframes } from '@mui/system'
import { useLayoutEffect, useRef, useState } from 'react'
import { getFileIcon } from '../../lib/getFileIcon'
import { IDocument } from '../../model/types'

const marquee = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`

export const File = ({
	file,
	onDelete,
}: {
	file: IDocument
	onDelete: (fileName: string) => Promise<any>
}) => {
	const [isOverflowing, setIsOverflowing] = useState(false)
	const containerRef = useRef<HTMLDivElement>(null)
	const textMeasureRef = useRef<HTMLSpanElement>(null)

	useLayoutEffect(() => {
		if (containerRef.current && textMeasureRef.current) {
			if (textMeasureRef.current.offsetWidth > containerRef.current.offsetWidth) {
				setIsOverflowing(true)
			} else {
				setIsOverflowing(false)
			}
		}
	}, [file.fileName])

	return (
		<Box
			sx={{
				position: 'relative',
				'&:hover .delete-button-container': {
					opacity: 1,
					pointerEvents: 'auto',
				},
			}}
		>
			<ListItemButton
				sx={{
					borderRadius: BORDER_RADIUS,
					display: 'flex',
					flexDirection: 'column',
					gap: 1,
					width: '160px',
					minHeight: '160px',
					justifyContent: 'center',
				}}
			>
				<ListItemAvatar sx={{ '&.MuiListItemAvatar-root': { minWidth: 0 } }}>
					{getFileIcon(file.type)}
				</ListItemAvatar>

				<ListItemText
					primary={
						<Box
							ref={containerRef}
							sx={{
								overflow: 'hidden',
								whiteSpace: 'nowrap',
								position: 'relative',
							}}
						>
							<span
								ref={textMeasureRef}
								style={{
									position: 'absolute',
									visibility: 'hidden',
									whiteSpace: 'nowrap',
								}}
							>
								{file.fileName}
							</span>
							{isOverflowing ? (
								<Box
									sx={{
										display: 'inline-block',
										animation: `${marquee} 7s linear infinite`,
										whiteSpace: 'nowrap',
									}}
								>
									<span style={{ paddingRight: '2em' }}>{file.fileName}</span>
									<span>{file.fileName}</span>
								</Box>
							) : (
								<span>{file.fileName}</span>
							)}
						</Box>
					}
					secondary={file.date.toLocaleDateString()}
					sx={{
						flex: 0,
						textAlign: 'center',
						width: '100%',
					}}
				/>
			</ListItemButton>

			<Box
				className='delete-button-container'
				onMouseDown={e => e.stopPropagation()}
				onTouchStart={e => e.stopPropagation()}
				sx={{
					position: 'absolute',
					top: '4px',
					right: '4px',
					opacity: 0,
					pointerEvents: 'none',
					transition: 'opacity 0.3s ease-in-out',
				}}
			>
				<DeleteButtonWithDialog
					action={() => onDelete(file.fileName)}
					title={`Вы действительно хотите удалить файл ${file.fileName}?`}
				>
					<IconButton color={'error'} icon={'CloseIcon'} />
				</DeleteButtonWithDialog>
			</Box>
		</Box>
	)
}
