import { IDateTimePickerProps } from '@/interfaces/IBasePickerProps'
import { forwardRef } from 'react'
import { BasePicker } from '../BasePicker/BasePicker'

export const BaseDateTimePicker = forwardRef<HTMLInputElement, IDateTimePickerProps>((props, ref) => (
	<BasePicker ref={ref} {...props} type='datetime' />
))
