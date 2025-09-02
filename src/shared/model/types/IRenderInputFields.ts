import { IFields, TField } from './TypeInputField'

export interface IRenderInputFields {
	fields: IFields | TField[]
	isLoading: boolean
}
