import { ITimePickerProps } from '@/interfaces/IBasePickerProps'
import { forwardRef } from 'react'
import { BasePicker } from '../BasePicker/BasePicker'

export const BaseTimePicker = forwardRef<HTMLInputElement, ITimePickerProps>((props, ref) => (
	<BasePicker ref={ref} {...props} type='time' />
))
