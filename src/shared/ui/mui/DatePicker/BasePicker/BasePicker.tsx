import { isValidDate } from '@/shared/libs'
import { DATETIME_FORMAT } from '@/shared/model/constants'
import { IBasePickerProps } from '@/shared/model/types/IBasePickerProps'
import {
	DatePicker,
	DateTimePicker,
	PickerChangeHandlerContext,
	TimePicker,
} from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import dayjs from 'dayjs'
import 'dayjs/locale/ru'
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import { forwardRef } from 'react'
import { useTranslation } from 'react-i18next'
import { ControlLoader } from '../../ControlLoader'

dayjs.extend(utc)
dayjs.extend(timezone)

const pickerComponents = {
	date: DatePicker,
	time: TimePicker,
	datetime: DateTimePicker,
}

function getValue(value: string | null, type: string): dayjs.Dayjs | null {
	if (!value) return dayjs()

	const newValue = dayjs(value)

	switch (type) {
		case 'time':
		case 'datetime':
			return newValue
		case 'date':
			return newValue.startOf('day')
		default:
			return null
	}
}

export const BasePicker = forwardRef<HTMLInputElement, IBasePickerProps>(
	(
		{
			value,
			onChange,
			disableControlLoader,
			disableTodayAction,
			name,
			required,
			variant,
			error,
			type,
			label = '',
			isLoading = false,
			isReadOnly = false,
			setError = undefined,
			id = undefined,
			...props
		},
		ref
	) => {
		const { t } = useTranslation()

		const PickerComponent = pickerComponents[type]
		const newValue = getValue(value, type)

		const handleDateChange = (
			newValue: string | number | dayjs.Dayjs | Date | null | undefined,
			context: PickerChangeHandlerContext<any>
		) => {
			const formattedDate = isValidDate(newValue)
				? dayjs(newValue).format(DATETIME_FORMAT)
				: null
			onChange?.(formattedDate, context)
		}

		return (
			<ControlLoader
				isLoading={isLoading}
				disableControlLoader={disableControlLoader}
			>
				<div>
					<LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={'ru'}>
						<PickerComponent
							inputRef={ref}
							label={t(label)}
							value={newValue}
							onChange={handleDateChange}
							readOnly={isReadOnly}
							timeSteps={{ minutes: 1 }}
							onError={reason => {
								setError?.(prev => ({
									...prev,
									[id]: t(`validation.${reason}`),
								}))

								if (!reason) {
									setError?.(prev => {
										const { [id]: _, ...rest } = prev
										return rest
									})
								}
							}}
							slotProps={{
								actionBar: {
									actions:
										type === 'date' && disableTodayAction
											? ['clear', 'accept']
											: ['clear', 'today', 'accept'],
								},
								popper: { sx: { zIndex: theme => theme.zIndex.tooltip + 1 } },
								textField: {
									name,
									required,
									size: 'medium',
									variant: variant ?? 'outlined',
									InputLabelProps: { shrink: true },
									InputProps: { placeholder: '' },
									fullWidth: true,
									error: !!(error && error.message),
									helperText: t(error?.message ?? ''),
									'test-type': type,
								},
							}}
							{...props}
						/>
					</LocalizationProvider>
				</div>
			</ControlLoader>
		)
	}
)
