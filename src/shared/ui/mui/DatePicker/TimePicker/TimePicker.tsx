import { ITimePickerProps } from '@/interfaces/IBasePickerProps'
import { BaseTimePicker } from '../BaseTimePicker'

export const TimePicker = (props: ITimePickerProps) => {
	return <BaseTimePicker {...props} />
}
