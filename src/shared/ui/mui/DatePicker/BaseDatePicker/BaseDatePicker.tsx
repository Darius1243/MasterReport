import { IDatePickerProps } from '@/interfaces/IBasePickerProps'
import { forwardRef } from 'react'
import { BasePicker } from '../BasePicker/BasePicker'

export const BaseDatePicker = forwardRef<HTMLInputElement, IDatePickerProps>((props, ref) => (
	<BasePicker ref={ref} {...props} type='date' />
))
