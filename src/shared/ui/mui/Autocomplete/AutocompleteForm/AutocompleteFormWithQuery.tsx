// import React from 'react'
// import { MiddlewareAutocompleteSetData } from '../MiddlewareAutocompleteSetData'
// import { AutocompleteForm } from './AutocompleteForm'
// import { IAutocompleteFormWithQuery } from '@/shared/model/types'

// export const AutocompleteFormWithQuery = ({
// 	name,
// 	label,
// 	crudOptions,
// 	valueKey,
// 	valueId,
// 	labelKeys,
// 	ids = {},
// 	onChange = undefined,
// 	isFreeSolo = false,
// 	replaceField = undefined,
// 	isLoading = false,
// 	isReadOnly = false,
// 	filter = undefined,
// 	dataConversionMiddleware = undefined,
// 	highlightOptions = undefined,
// 	getOptions = undefined,
// 	optionsDependBy,
// 	enabled = true,
// 	...props
// }: IAutocompleteFormWithQuery) => {
// 	// const [options, setOptions] = React.useState([])

// 	// const setData = data => {
// 	// 	const newData = MiddlewareAutocompleteSetData({
// 	// 		replaceField,
// 	// 		filter,
// 	// 		data,
// 	// 		dataConversionMiddleware,
// 	// 		valueKey,
// 	// 	})

// 	// 	setOptions(newData)
// 	// 	getOptions?.(newData)
// 	// }

// 	// const { isLoading, isError, refetch } = useCRUD({
// 	// 	ids,
// 	// 	setData,
// 	// 	options: crudOptions,
// 	// 	enabled,
// 	// })

// 	return (
// 		<AutocompleteForm
// 			name={name}
// 			label={label}
// 			onChange={onChange}
// 			options={options}
// 			valueKey={valueKey}
// 			valueId={valueId}
// 			labelKeys={labelKeys}
// 			isFreeSolo={isFreeSolo}
// 			isReadOnly={isReadOnly}
// 			isLoading={isLoading || isLoading}
// 			isError={isError}
// 			refetch={refetch}
// 			optionsDependBy={optionsDependBy}
// 			highlightOptions={highlightOptions}
// 			{...props}
// 		/>
// 	)
// }
