// import { isEmpty } from '@/shared/libs'
// import { getIcon } from '@/shared/libs/getIcon'
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
// import {
// 	AccordionDetails,
// 	AccordionSummary,
// 	Icon,
// 	SnackbarContent,
// } from '@mui/material'
// import Box from '@mui/material/Box'
// import Card from '@mui/material/Card'
// import CardActions from '@mui/material/CardActions'
// import Collapse from '@mui/material/Collapse'
// import Paper from '@mui/material/Paper'
// import Typography from '@mui/material/Typography'
// import { t } from 'i18next'
// import { ToastContentProps } from 'react-toastify'
// import { IconButton } from '../Button'

// export const MasterSnackbar = ({ promise, closeToast }: ToastContentProps) => {
// 	return (
// 		<SnackbarContent ref={ref} role={'alert'}>
// 			<Card
// 				elevation={5}
// 				sx={{ width: '100%', bgcolor: getColorVariant(variant) }}
// 			>
// 				<CardActions sx={{ p: 1, pl: 2, justifyContent: 'space-between' }}>
// 					<Box display={'flex'} gap={1}>
// 						<Icon sx={{ color: 'white', display: 'flex' }}>
// 							{getIconVariant(variant)}
// 						</Icon>

// 						<Typography variant='body1' sx={{ color: '#fff' }}>
// 							{t(message)}
// 						</Typography>
// 					</Box>

// 					<Box>
// 						<IconButton
// 							size={'small'}
// 							icon={'ExpandMoreIcon'}
// 							sx={{
// 								transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
// 								transition: 'all .2s',
// 								color: 'white',
// 								display: isPromisesNotEmpty ? undefined : 'none',
// 							}}
// 							onClick={() => setExpanded(oldExpanded => !oldExpanded)}
// 						/>

// 						<IconButton
// 							size={'small'}
// 							icon={'CloseIcon'}
// 							sx={{ color: 'white' }}
// 							onClick={() => closeToast()}
// 						/>
// 					</Box>
// 				</CardActions>

// 				{isPromisesNotEmpty ? (
// 					<Collapse in={expanded} timeout={'auto'} unmountOnExit>
// 						<Paper sx={{ bgcolor: 'white' }}>
// 							{Array.isArray(promises) &&
// 								promises?.map((promise, index) => {
// 									if (!promise?.config) return null

// 									const _rowIndex = removeFirstZeroIfNotOnlyZero(
// 										promise._rowIndex
// 									)
// 									const rowIndex = rowIndexIsNotNull(_rowIndex)
// 										? `#${_rowIndex} -`
// 										: ''
// 									const modelName = getModelName(promise)
// 									const labelConfigMethod = getLabelConfigMethod(
// 										promise.config.method
// 									)
// 									const methodName = getMethodName({
// 										method: promise.config.method,
// 										labelConfigMethod,
// 									})

// 									return (
// 										<MuiAccordion key={index} elevation={3}>
// 											<AccordionSummary expandIcon={<ExpandMoreIcon />}>
// 												<Box
// 													sx={{
// 														display: 'flex',
// 														gap: 3,
// 														alignItems: 'center',
// 														width: '100%',
// 													}}
// 												>
// 													<Box display={'flex'} gap={1} alignItems={'center'}>
// 														<Icon
// 															sx={{
// 																display: 'flex',
// 																color: getColorVariant(variant),
// 															}}
// 														>
// 															{getIconVariant(variant)}
// 														</Icon>

// 														<Typography
// 															variant={'body2'}
// 															color={getColorVariant(variant)}
// 														>
// 															{`${rowIndex} ${promise.statusText} - ${promise.status}`}
// 														</Typography>
// 													</Box>

// 													<Typography
// 														sx={{ color: 'text.secondary' }}
// 														variant={'body2'}
// 													>
// 														{labelConfigMethod}
// 													</Typography>
// 												</Box>
// 											</AccordionSummary>

// 											<AccordionDetails>
// 												<Typography variant={'body2'}>
// 													Модель: {modelName}
// 												</Typography>
// 												<Typography variant={'body2'}>
// 													Метод: {methodName}
// 												</Typography>

// 												{rowIndexIsNotNull(_rowIndex) ? (
// 													<Typography variant={'body2'}>
// 														Строка: {_rowIndex}
// 													</Typography>
// 												) : null}
// 											</AccordionDetails>
// 										</MuiAccordion>
// 									)
// 								})}
// 						</Paper>
// 					</Collapse>
// 				) : null}
// 			</Card>
// 		</SnackbarContent>
// 	)
// }

// const getLabelConfigMethod = method => {
// 	switch (method) {
// 		case 'get':
// 			return t('messages.configMethodGet')
// 		case 'post':
// 			return t('messages.configMethodPost')
// 		case 'patch':
// 			return t('messages.configMethodPatch')
// 		case 'delete':
// 			return t('messages.configMethodDelete')
// 		default:
// 			return method
// 	}
// }

// const getColorVariant = (variant: string) => {
// 	switch (variant) {
// 		case 'snackbarSuccess':
// 			return '#43a047'
// 		case 'snackbarError':
// 			return '#d32f2f'
// 		case 'snackbarWarning':
// 			return '#ff9800'
// 		case 'snackbarInfo':
// 			return '#2196f3'
// 		default:
// 			return '#313131'
// 	}
// }

// const getIconVariant = (variant: string) => {
// 	switch (variant) {
// 		case 'snackbarSuccess':
// 			return getIcon('CheckCircleIcon')
// 		case 'snackbarError':
// 			return getIcon('CancelIcon')
// 		case 'snackbarWarning':
// 			return getIcon('WarningIcon')
// 		case 'snackbarInfo':
// 			return getIcon('InfoIcon')
// 		default:
// 			return null
// 	}
// }

// const getModelName = promise => {
// 	const url = promise.config.url
// 	const method = promise.config.method

// 	const splitUrl = url.split('/')
// 	const modelName =
// 		method === 'delete' ? splitUrl.slice(0, -2).pop() : splitUrl.pop()

// 	return modelName
// }

// const getMethodName = ({ method, labelConfigMethod }) => {
// 	if (isEmpty(method)) return method

// 	return `${method.toUpperCase()} - (${labelConfigMethod})`
// }

// function removeFirstZeroIfNotOnlyZero(str) {
// 	if (isEmpty(str)) return str

// 	return str.length > 1 && str.startsWith('0') ? str.substring(1) : str
// }

// const rowIndexIsNotNull = rowIndex =>
// 	rowIndex !== null && rowIndex !== undefined
