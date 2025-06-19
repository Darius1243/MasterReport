import {
	DatePickerProps,
	DateTimePickerProps,
	TimePickerProps,
} from '@mui/x-date-pickers'
import { UsePickerValueBaseProps } from '@mui/x-date-pickers/internals/hooks/usePicker/usePickerValue.types'
import { FieldError } from 'react-hook-form'
import {
	DATE,
	DATETIME,
	DATETIME_FORM,
	DATE_FORM,
	TIME,
	TIME_FORM,
} from '../constants'
import { IBaseInputFieldProps } from './IBaseInputFieldProps'

export interface IBasePickerProps
	extends IBaseInputFieldProps,
		Pick<UsePickerValueBaseProps<any, any>, 'value' | 'onChange'> {
	type: 'date' | 'time' | 'datetime'
	label?: string
	isLoading?: boolean
	isReadOnly?: boolean
	error?: FieldError
	disableControlLoader?: boolean
	disableTodayAction?: boolean
}

// TIME
export interface ITimePickerProps
	extends IBasePickerProps,
		Omit<TimePickerProps<any>, 'label' | 'value' | 'onChange'> {}

export interface ITime extends Omit<ITimePickerProps, 'type'> {
	type: typeof TIME_FORM | typeof TIME
}

// DateTime
export interface IDateTimePickerProps
	extends IBasePickerProps,
		Omit<DateTimePickerProps<any>, 'label' | 'value' | 'onChange'> {}

export interface IDateTime extends Omit<IDateTimePickerProps, 'type'> {
	type: typeof DATETIME_FORM | typeof DATETIME
	visibility?: Record<string, string>
}

export interface IDateTimeColumn extends Omit<IDateTimePickerProps, 'type'> {
	type: typeof DATETIME
}

// Date
export interface IDatePickerProps
	extends Omit<IBasePickerProps, 'value' | 'onChange'>,
		Omit<DatePickerProps<any>, 'label' | 'value' | 'onChange'> {}

export interface IDate extends Omit<IDatePickerProps, 'type'> {
	type: typeof DATE_FORM | typeof DATE
}

export interface IDateColumn extends Omit<IDatePickerProps, 'type'> {
	type: typeof DATE
}
