import { IAutocompleteOptions } from '@/shared/model/types'
import { useEffect } from 'react'
import { Autocomplete } from '../Autocomplete/Autocomplete'

export const AutocompleteMRTable = ({
	options,
	onChange,
	isLoading = false,
	isError = false,
	refetch = undefined,
	row = undefined,
	optionsDependBy = undefined,
	uniqueName,
	autocompleteData,
	filterBy,
	filterByDepended,
	valueKey,
	rows,
	excludeSelectedItems,
	dependenceFields,
	parentRow,
	...props
}: {
	options: readonly any[] | undefined
	onChange: (value: any, key: string) => void
	isLoading?: boolean
	isError?: boolean
	refetch?: () => void
	// row?: Row<MRT_RowData>
	// rows: Row<MRT_RowData>[]
	autocompleteData: any
	// optionsDependBy?: IAutocompleteFormWithQuery['optionsDependBy']
	uniqueName: IAutocompleteOptions['uniqueName']
	filterBy?: IAutocompleteOptions['filterBy']
	filterByDepended?: IAutocompleteOptions['filterByDepended']
	valueKey?: IAutocompleteOptions['valueKey']
	excludeSelectedItems?: IAutocompleteOptions['excludeSelectedItems']
	parentRow?: Record<string, any>
}) => {
	useEffect(() => {
		// заполнено поле
		const isNotEmptyValue = props?.value != '' && props?.value != null

		if (!options?.length && isNotEmptyValue) onChange(null)
	}, [options])

	return (
		<Autocomplete
			options={options}
			textFieldVariant='standard'
			componentsProps={{
				paper: { sx: { minWidth: 'max-content', width: undefined } },
			}}
			isLoading={isLoading}
			isError={isError}
			refetch={refetch}
			valueKey={valueKey}
			uniqueName={uniqueName}
			filterBy={filterBy}
			onChange={(value, withFields) => {
				if (withFields) {
					Object.keys(withFields).forEach(key => {
						const prevValue = row?.original[key]
						const newValue = withFields[key]

						if (prevValue === newValue) return

						onChange(withFields[key], key)
					})
				}

				if (dependenceFields) {
					dependenceFields.forEach(item => {
						if (item.skip === 'table') {
							item.calcFunc(row, autocompleteData, item.fromAutocomplete, value)
						}
					})
				}

				onChange(value)
			}}
			{...props}
		/>
	)
}
