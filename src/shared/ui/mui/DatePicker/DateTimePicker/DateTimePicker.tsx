import { IDateTimePickerProps } from '@/interfaces/IBasePickerProps'
import { BaseDateTimePicker } from '../BaseDateTimePicker'

export const DateTimePicker = (props: IDateTimePickerProps) => {
	return <BaseDateTimePicker {...props} />
}
