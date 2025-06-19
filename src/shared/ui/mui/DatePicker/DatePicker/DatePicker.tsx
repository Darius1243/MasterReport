import { IDatePickerProps } from '@/interfaces/IBasePickerProps'
import { BaseDatePicker } from '../BaseDatePicker'

export const DatePicker = (props: IDatePickerProps) => {
	return <BaseDatePicker {...props} />
}
