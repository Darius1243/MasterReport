import { getIcon } from '@/shared/libs/getIcon'
import { Box, CircularProgress, Icon, Typography } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogTitle from '@mui/material/DialogTitle'
import { t } from 'i18next'
import { useEffect, useState } from 'react'
import { Button } from '../mui/Button'

export interface IDialogYesNoCancel {
	title: string
	open: boolean
	onClose: (request: string, data: any) => void
	isOnlyOk?: boolean
	disableCancel?: boolean
	disableNo?: boolean
	isDisableSaveButton?: boolean
	isLoading?: boolean
	children?:
		| string
		| {
				messages: {
					key: string
					messageType?: 'warning' | 'info'
					options: any
				}[]
		  }
}

export const DialogYesNoCancel = ({
	title,
	open,
	onClose,
	isOnlyOk = false,
	disableCancel = false,
	disableNo = false,
	isLoading = false,
	isDisableSaveButton = false,
	children = undefined,
}: IDialogYesNoCancel) => {
	const [showLoader, setShowLoader] = useState(false)

	const message =
		typeof children === 'string'
			? { messages: [{ key: children, options: {} }] }
			: children

	const data = message?.data

	useEffect(() => {
		let timer: NodeJS.Timeout | null = null

		if (isLoading) {
			timer = setTimeout(() => setShowLoader(true), 1000)
		} else {
			setShowLoader(false)
		}

		return () => {
			if (timer) clearTimeout(timer)
		}
	}, [isLoading])

	return (
		<Dialog open={open} disableRestoreFocus>
			<Box>
				<DialogTitle sx={{ display: 'flex', alignItems: 'end' }}>
					<Icon
						sx={{ fontSize: '3rem' }}
						color={'error'}
						style={{ marginRight: 20, textAlign: 'start' }}
					>
						{getIcon('WarningIcon')}
					</Icon>

					{t(title)}
				</DialogTitle>

				<Box pb={1}>
					{message?.messages?.map(({ key, messageType }, index) => {
						return (
							<Box key={index} px={3} display={'flex'} gap={1}>
								{messageType ? (
									<Icon color={messageType}>
										{getIcon(
											messageType === 'warning' ? 'WarningIcon' : 'InfoIcon'
										)}
									</Icon>
								) : null}

								<Typography key={index}>{key}</Typography>
							</Box>
						)
					})}
				</Box>

				<Box
					display={showLoader ? 'flex' : 'none'}
					justifyContent={'center'}
					pb={1}
				>
					<CircularProgress />
				</Box>

				<DialogActions>
					<Button
						size={'medium'}
						variant={'text'}
						fullWidth
						label={'Ок'}
						onClick={() => onClose('ok', data)}
						isDisabled={isDisableSaveButton || isLoading}
						sx={{ display: isOnlyOk ? 'flex' : 'none' }}
					/>

					<Button
						size={'medium'}
						variant={'text'}
						fullWidth
						label={'Да'}
						onClick={() => onClose('yes', data)}
						isDisabled={isDisableSaveButton || isLoading}
						sx={{ display: isOnlyOk ? 'none' : 'flex' }}
						color={'error'}
					/>

					<Button
						size={'medium'}
						variant={'blank'}
						fullWidth
						label={'Нет'}
						onClick={() => onClose('no', data)}
						isDisabled={isLoading}
						sx={{ display: disableNo || isOnlyOk ? 'none' : 'flex' }}
					/>

					<Button
						size={'medium'}
						variant={'blank'}
						fullWidth
						label={'Отмена'}
						onClick={() => onClose('cancel', data)}
						sx={{ display: disableCancel || isOnlyOk ? 'none' : 'flex' }}
						isDisabled={isLoading}
					/>
				</DialogActions>
			</Box>
		</Dialog>
	)
}
