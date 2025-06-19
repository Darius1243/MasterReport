export const EditComponents = ({
	ids,
	autocompleteData,
	elements,
	elementsOption,
	handleSaveCell,
	isLoadingFieldsOptions,
	isErrorFieldsOptions,
	refetchFieldsOptions,
	validationErrors,
	setValidationErrors,
	parentRow,
}: {
	ids?: IIds
	autocompleteData: any
	elements: ISchemaWidget
	elementsOption?: any
	handleSaveCell: any
	isLoadingFieldsOptions?: boolean
	isErrorFieldsOptions?: boolean
	refetchFieldsOptions?: any
	validationErrors?: any
	setValidationErrors?: (data: any) => void
	parentRow?: Record<string, any>
}) => {
	// const result = {}
	// const { validationSchema, fields, widgetName } = getVariableFromElements(elements)
	// Object.values(fields).forEach(rawCol => {
	// 	const col = { ...rawCol }
	// 	if (elementsOption?.[col.name]?.autocomplete) {
	// 		col.autocomplete = { ...elementsOption[col.name].autocomplete }
	// 		col.type = elementsOption[col.name].type
	// 	}
	// 	if (col.autocomplete) col.type = Constants.AUTOCOMPLETE
	// 	if (col.autocomplete?.addNewItemForm) col.type = Constants.AUTOCOMPLETE_WITH_QUERY
	// 	switch (col.type) {
	// 		case Constants.RADIO: {
	// 			const edit = {
	// 				Edit: ({ cell, table }) => {
	// 					return (
	// 						<Radio
	// 							name={col.name}
	// 							checked={cell.row.original[cell.column.id] ?? false}
	// 							onChange={e => handleSaveCell({ value: e.target.checked, cell, type: col.type, table })}
	// 							test-type='radio'
	// 							size='small'
	// 						/>
	// 					)
	// 				},
	// 			}
	// 			result[col.name] = edit
	// 			break
	// 		}
	// 		case Constants.CHECKBOX: {
	// 			const edit = {
	// 				Edit: ({ cell }) => {
	// 					const { isReadOnlyControl } = getVariablesByCell(cell)
	// 					return (
	// 						<CheckBox.CheckBox
	// 							name={col.name}
	// 							required={col.required}
	// 							error={{ message: validationErrors?.[cell.id] }}
	// 							tooltip={`${widgetName}.${col.name}`}
	// 							checked={cell.row.original[cell.column.id]}
	// 							onChange={e =>
	// 								!isReadOnlyControl &&
	// 								handleSaveCell({ value: e.target.checked, cell, type: col.type, validationSchema })
	// 							}
	// 						/>
	// 					)
	// 				},
	// 			}
	// 			result[col.name] = edit
	// 			break
	// 		}
	// 		case Constants.DATE:
	// 		case Constants.TIME:
	// 		case Constants.DATETIME: {
	// 			const edit = {
	// 				Edit: ({ cell }) => {
	// 					const { rowValue, isReadOnlyControl } = getVariablesByCell(cell)
	// 					const Component = getDatesComponent(col.type)
	// 					if (isReadOnlyControl) {
	// 						return formattingDateTime(rowValue, col.type, i18next.language)
	// 						// return formattedDate
	// 					}
	// 					return (
	// 						<Component
	// 							name={col.name}
	// 							required={col.required}
	// 							error={{ message: validationErrors?.[cell.id] }}
	// 							isReadOnly={col.isReadOnly}
	// 							value={cell.row.original[cell.column.id]}
	// 							onChange={value => handleSaveCell({ value, cell, type: col.type, validationSchema })}
	// 							maxDate={getDateValueVariant(col?.maxDate)}
	// 							defaultValue={getDateValueVariant(col?.defaultValue)}
	// 							setError={setValidationErrors}
	// 							id={cell.id}
	// 							disableControlLoader
	// 						/>
	// 					)
	// 				},
	// 			}
	// 			result[col.name] = edit
	// 			break
	// 		}
	// 		case Constants.COLOR: {
	// 			const edit = {
	// 				Edit: editProps => {
	// 					const cell = editProps.cell
	// 					return (
	// 						<BaseColorPicker
	// 							color={cell.row.original[cell.column.id]}
	// 							onChange={value => handleSaveCell({ value, cell, type: col.type, validationSchema })}
	// 							id={cell.id}
	// 						/>
	// 					)
	// 				},
	// 			}
	// 			result[col.name] = edit
	// 			break
	// 		}
	// 		case Constants.AUTOCOMPLETE: {
	// 			if (!col.autocomplete) {
	// 				return
	// 			}
	// 			const { uniqueName, options, filterByDepended, excludeSelectedItems, ...rest } = col.autocomplete
	// 			const edit = {
	// 				Edit: ({ cell, column, table }) => {
	// 					const { rowValue, isReadOnlyControl } = getVariablesByCell(cell)
	// 					if (isReadOnlyControl) {
	// 						return rowValue
	// 					}
	// 					const rows = table.getCoreRowModel().flatRows as Row<MRT_RowData>[]
	// 					const onChange = (value, columnId) => {
	// 						if (rowValue !== value) {
	// 							const _cell = columnId ? { ...cell, column: { ...cell.column, id: columnId } } : cell
	// 							handleSaveCell({
	// 								value,
	// 								cell: _cell,
	// 								type: col.type,
	// 								validationSchema,
	// 								autocompleteData,
	// 							})
	// 						}
	// 					}
	// 					return (
	// 						<Autocomplete.AutocompleteMRTable
	// 							ids={ids}
	// 							id={col.name}
	// 							value={rowValue}
	// 							onChange={onChange}
	// 							required={col.required}
	// 							name={col.name}
	// 							options={options}
	// 							uniqueName={uniqueName}
	// 							autocompleteData={autocompleteData}
	// 							filterByDepended={filterByDepended}
	// 							row={cell.row}
	// 							rows={rows}
	// 							parentRow={parentRow}
	// 							excludeSelectedItems={excludeSelectedItems}
	// 							isLoading={isLoadingFieldsOptions}
	// 							isError={isErrorFieldsOptions}
	// 							refetch={refetchFieldsOptions}
	// 							optionsDependBy={col.optionsDependBy}
	// 							error={{ message: validationErrors?.[cell.id] }}
	// 							{...rest}
	// 						/>
	// 					)
	// 				},
	// 			}
	// 			result[col.name] = edit
	// 			break
	// 		}
	// 		case Constants.AUTOCOMPLETE_WITH_QUERY: {
	// 			if (!col.autocomplete) {
	// 				return
	// 			}
	// 			const { uniqueName, addNewItemForm, excludeSelectedItems, ...rest } = col.autocomplete
	// 			const crud = addNewItemForm?.crud ?? col.autocomplete?.crudOptions ?? {}
	// 			const newAddNewItemForm = {
	// 				...addNewItemForm,
	// 				crud: { ...crud, isObject: true, tableName: crud.tableName + '_add' },
	// 			}
	// 			const edit = {
	// 				Edit: ({ cell, table }) => {
	// 					const { rowValue, isReadOnlyControl } = getVariablesByCell(cell)
	// 					if (isReadOnlyControl) {
	// 						return rowValue
	// 					}
	// 					const rows = table.getCoreRowModel().flatRows as Row<MRT_RowData>[]
	// 					const onChange = async (value, columnId, needRefetchOptions: boolean | undefined) => {
	// 						if (rowValue !== value) {
	// 							const _cell = columnId ? { ...cell, column: { ...cell.column, id: columnId } } : cell
	// 							const { data } = needRefetchOptions ? await refetchFieldsOptions() : autocompleteData
	// 							handleSaveCell({
	// 								value,
	// 								cell: _cell,
	// 								type: col.type,
	// 								validationSchema,
	// 								autocompleteData: needRefetchOptions ? data.autocompleteData : autocompleteData,
	// 							})
	// 						}
	// 					}
	// 					return (
	// 						<AutocompleteWithQuery
	// 							ids={ids}
	// 							id={col.name}
	// 							required={col.required}
	// 							name={col.name}
	// 							uniqueName={uniqueName}
	// 							value={rowValue}
	// 							onChange={onChange}
	// 							isLoading={isLoadingFieldsOptions}
	// 							isError={isErrorFieldsOptions}
	// 							error={{ message: validationErrors?.[cell.id] }}
	// 							row={cell?.row}
	// 							rows={rows}
	// 							crudOptions={crud}
	// 							addNewItemForm={newAddNewItemForm}
	// 							optionsDependBy={col.optionsDependBy}
	// 							excludeSelectedItems={excludeSelectedItems}
	// 							processOptions={col.autocomplete?.processOptions}
	// 							disableAddItem={col.autocomplete?.disableAddItem}
	// 							{...rest}
	// 						/>
	// 					)
	// 				},
	// 			}
	// 			result[col.name] = edit
	// 			break
	// 		}
	// 	}
	// })
	// return result
}

// function getDatesComponent(type: string): React.ComponentType<any> | null {
// 	switch (type) {
// 		case Constants.DATE:
// 			return DatePicker.DatePicker
// 		case Constants.DATETIME:
// 			return DatePicker.DateTimePicker
// 		case Constants.TIME:
// 			return DatePicker.TimePicker
// 		default:
// 			return null
// 	}
// }
