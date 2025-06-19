import { IAutocompleteOptions } from './IAutocomplete'
import { TValue } from './TValue'

export interface IAutocompleteFormWithQuery extends IAutocompleteOptions {
	name: string
	label: string
	onChange?: (value: TValue) => void
	isLoading?: boolean
	isReadOnly?: boolean
	dataConversionMiddleware?: (data: any) => any
	highlightOptions?: boolean
	optionsDependBy?: {
		value: string
		filterFunc?: () => any[]
	}
	getOptions?: (options: any) => void
}
