import { useMemo } from 'react'
import { BaseAutocomplete } from '../BaseAutocomplete'

export const Autocomplete = ({
	label,
	options,
	value,
	onChange,
	valueKey,
	labelKeys,
	valueId = '',
	isLoading = false,
	isFreeSolo = false,
	isReadOnly = false,
	isError = false,
	refetch = undefined,
	textFieldVariant = 'standard',
	getInternalValue = undefined,
	highlightOptions = undefined,
	disableControlLoader = false,
	excludeSelectedItems = false,
	row = undefined,
	rows = undefined,
	...props
}) => {
	const filteredOptions = useMemo(() => {
		// Нужно фильтровать _options по rows, чтобы не было возможности выбрать одинаковые значения в разных строках
		return excludeSelectedItemsFromOptions({ options, row, rows, excludeSelectedItems, valueKey })
	}, [options, row, rows])

	return (
		<BaseAutocomplete
			options={filteredOptions}
			value={value}
			onChange={onChange}
			valueKey={valueKey}
			valueId={valueId}
			labelKeys={labelKeys}
			label={label}
			isFreeSolo={isFreeSolo}
			isLoading={isLoading}
			isReadOnly={isReadOnly}
			isError={isError}
			refetch={refetch}
			row={row}
			textFieldVariant={textFieldVariant}
			getInternalValue={getInternalValue}
			highlightOptions={highlightOptions}
			disableControlLoader={disableControlLoader}
			{...props}
		/>
	)
}

function excludeSelectedItemsFromOptions({ options, row, rows, excludeSelectedItems, valueKey }) {
	if (excludeSelectedItems && row && rows) {
		const selectedValues = rows.filter(r => r.id !== row.id).map(r => r.original[valueKey])
		return options.filter(option => !selectedValues.includes(option[valueKey]))
	}

	return options
}
