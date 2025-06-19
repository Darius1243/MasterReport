import { TValue } from './TValue'
import { IFields } from './TypeInputField'

export interface IWidget {
	fields: IFields
	defaultValues?: Record<string, TValue>
	validationSchema?: any
}
