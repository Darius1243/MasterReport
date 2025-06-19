// import { useCRUD } from '@/hooks/queries'
// import { ICrud, IIds } from '@/interfaces'
// import { getAutocompleteOptions } from '@helper/getAutocompleteHelper'
// import { useMemo, useState } from 'react'
// import { Autocomplete } from './Autocomplete'

// interface IAutocompleteWithQuery {
// 	label: string
// 	crudOptions: ICrud
// 	value: string | null
// 	onChange: (value: string) => void
// 	ids?: IIds
// 	valueKey: string
// 	labelKeys: any
// 	valueId?: string
// 	row?: any
// 	rows?: any
// 	isFreeSolo?: boolean
// 	replaceField?: any
// 	isLoading?: boolean
// 	isReadOnly?: boolean
// 	filter?: any
// 	getInternalValue?: any
// 	excludeSelectedItems?: boolean
// 	isAllData?: boolean
// 	additionalOptions?: Record<string, unknown>[]
// }

// export const AutocompleteWithQuery = ({
// 	label,
// 	crudOptions,
// 	valueKey,
// 	labelKeys,
// 	ids,
// 	valueId = undefined,
// 	row = undefined,
// 	rows = undefined,
// 	isFreeSolo = false,
// 	replaceField = undefined,
// 	isLoading = false,
// 	isReadOnly = false,
// 	filter = undefined,
// 	getInternalValue = undefined,
// 	excludeSelectedItems = false,
// 	processOptions = undefined,
// 	disableAddItem = false,
// 	isAllData = false,
// 	additionalOptions,
// 	optionsDependBy = undefined,
// 	...props
// }: IAutocompleteWithQuery) => {
// 	const [previousOptions, setData] = useState([])
// 	const { data, isLoading, isError, refetch } = useCRUD({ ids, options: crudOptions, isAllData })

// 	if (props?.addNewItemForm && disableAddItem) {
// 		delete props.addNewItemForm
// 	}

// 	const options = useMemo(() => {
// 		const autocompleteOptions = getAutocompleteOptions({
// 			parentRow: row?.original,
// 			rows,
// 			row,
// 			options: data,
// 			optionsDependBy,
// 			valueKey,
// 			excludeSelectedItems,
// 			additionalOptions,
// 			replaceField,
// 		})

// 		return processOptions
// 			? processOptions(autocompleteOptions || previousOptions, data, setData)
// 			: autocompleteOptions
// 	}, [data, processOptions, optionsDependBy, row])

// 	return (
// 		<Autocomplete
// 			ids={ids}
// 			label={label}
// 			options={options}
// 			valueKey={valueKey}
// 			valueId={valueId}
// 			labelKeys={labelKeys}
// 			isFreeSolo={isFreeSolo}
// 			isReadOnly={isReadOnly}
// 			isLoading={isLoading || isLoading}
// 			isError={isError}
// 			refetch={refetch}
// 			getInternalValue={getInternalValue}
// 			excludeSelectedItems={excludeSelectedItems}
// 			row={row}
// 			rows={rows}
// 			{...props}
// 		/>
// 	)
// }
