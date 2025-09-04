import { QR_CODE_REGION_ID } from '@/shared/model/constants'
import { Button } from '@/shared/ui/mui/Button'
import { Box } from '@mui/material'
import { ChangeEvent } from 'react'

type ScanningViewProps = {
	onFileChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const ScanningView = ({ onFileChange }: ScanningViewProps) => {
	return (
		<Box
			sx={{
				position: 'fixed',
				top: 0,
				left: 0,
				height: '100svh',
				width: '100svw',
			}}
		>
			<div id={QR_CODE_REGION_ID} style={{ width: '100%', height: '100%' }} />

			<Box
				sx={{
					position: 'absolute',
					bottom: 150,
					left: 0,
					right: 0,
					display: 'flex',
					justifyContent: 'center',
				}}
			>
				<Button
					component='span'
					label='Сканировать с фото'
					icon={'PhotoIcon'}
					sx={{ color: 'white', bgcolor: 'rgba(0, 0, 0, 0.3)' }}
					onClick={() => document.getElementById('qr-file-input')?.click()}
				/>

				<input
					id='qr-file-input'
					type='file'
					accept='image/*'
					style={{ display: 'none' }}
					onChange={onFileChange}
				/>
			</Box>
		</Box>
	)
}
