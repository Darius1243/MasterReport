import { isEmpty, isObject } from '@/shared/libs'
import Autocomplete from '@mui/material/Autocomplete'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { darken, lighten, styled } from '@mui/material/styles'
import React, { memo, useCallback, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { IconButton } from '../../Button'
import { InputField } from '../../InputField'

export const BaseAutocomplete = memo(
	({
		ids,
		options,
		value,
		onChange,
		labelKeys,
		valueKey,
		valueId = 'id',
		label = '',
		isFreeSolo = false,
		isLoading = false,
		isReadOnly = false,
		isError = false,
		refetch = undefined,
		withFields = undefined,
		textFieldVariant = 'standard',
		getInternalValue = undefined,
		highlightOptions = undefined,
		disableControlLoader = false,
		error = undefined,
		isSelectOneSingleItem = false,
		addNewItemForm = undefined,
		uniqueName = undefined,
		sortBy = undefined,
		replaceField = undefined,
		filterBy = undefined,
		row = undefined,
		...props
	}) => {
		const { t } = useTranslation()
		const inputRef = props?.inputRef

		if (props?.inputRef) {
			delete props.inputRef
		}

		const labelKey = labelKeys.rootLabel

		const handleChange = useCallback(
			(newValue, needRefetchOptions?: boolean | undefined) => {
				if (typeof newValue === 'string') {
					onChange(newValue)
					getInternalValue?.(newValue)
				} else {
					const _withFields = {}

					if (!isEmpty(withFields) && !isEmpty(newValue)) {
						if (isObject(withFields)) {
							for (const field in withFields) {
								if (withFields.hasOwnProperty(field)) {
									_withFields[field] = newValue[withFields[field]]
								}
							}
						} else {
							withFields.forEach(
								field => (_withFields[field] = newValue[field])
							)
						}
					}

					const newValueKey = newValue?.[valueKey] ?? newValue
					onChange(
						newValueKey,
						!isEmpty(_withFields) ? _withFields : undefined,
						needRefetchOptions ?? undefined
					)
					getInternalValue?.(newValue)
				}
			},
			[onChange, getInternalValue, withFields, valueKey]
		)

		const handleAddNewItem = useCallback(() => {
			const extractedFields = extractFieldsFromRow(
				addNewItemForm?.addFieldsToIds,
				row?.original
			)

			// openModal({
			// 	component: (
			// 		<WidgetMasterComponent
			// 			startIds={{ ...ids, ...sharedProps, ...extractedFields }}
			// 			entityName={null}
			// 			component={addNewItemForm}
			// 			refetchData={refetch}
			// 			afterSubmit={values => handleChange(values, true)}
			// 			methodType={'add'}
			// 		/>
			// 	),
			// 	title: 'messages.addNewItem',
			// })
		}, [ids, addNewItemForm, refetch, handleChange])

		const internalValue = useMemo(() => {
			if (isEmpty(valueKey)) console.error('valueKey is required')

			if (!options?.length) return isFreeSolo ? value : null
			if (isEmpty(value)) return null

			const foundOption = options.find(option => option[valueKey] === value)
			if (foundOption) return foundOption

			return isFreeSolo ? value : null
		}, [options, value, valueKey, isFreeSolo])

		return (
			<Autocomplete
				options={options ?? []}
				size='medium'
				fullWidth
				selectOnFocus
				clearOnBlur={!isFreeSolo}
				// autoSelect
				handleHomeEndKeys
				freeSolo={isFreeSolo}
				autoHighlight
				autoComplete
				forcePopupIcon
				includeInputInList
				readOnly={isReadOnly}
				value={internalValue}
				onInputChange={(_, newValue) => isFreeSolo && handleChange(newValue)}
				onChange={(_, newValue) => handleChange(newValue)}
				slotProps={{
					paper: { sx: { minWidth: 'max-content', width: undefined } },
					popper: { sx: { zIndex: 2000 } },
				}}
				isOptionEqualToValue={(option, value) => {
					return (
						option[valueKey] ===
						(typeof value === 'string' ? value : value[valueKey])
					)
				}}
				getOptionLabel={option => {
					return getOption(option, labelKey, t)
				}}
				renderOption={(props, option) => {
					const isHighlighted =
						highlightOptions?.length &&
						highlightOptions.includes(getOption(option, valueId, t))

					return (
						<Box
							component='li'
							sx={{ display: 'flex', gap: 2 }}
							{...props}
							key={props.id}
						>
							{typeof option === 'string' ? (
								<Label t={t} isHighlighted={isHighlighted} option={option} />
							) : !labelKeys.keys ? (
								<Label
									t={t}
									isHighlighted={isHighlighted}
									option={option}
									labelKey={labelKey}
								/>
							) : (
								<Grid
									sx={{
										display: 'grid',
										gridAutoFlow: 'column',
										gridAutoColumns: 'minmax(0, 1fr)',
									}}
									container
									data-testid={'GridContainer'}
									gap={4}
									size={'grow'}
								>
									{labelKeys.keys.map((labelKey, index) => {
										return (
											<Grid
												sx={{ maxWidth: '170px', overflowWrap: 'break-word' }}
												data-testid={'GridItem'}
												key={index}
												size={'grow'}
											>
												<Label
													t={t}
													isHighlighted={isHighlighted}
													option={option}
													labelKey={labelKey}
												/>
											</Grid>
										)
									})}
								</Grid>
							)}
						</Box>
					)
				}}
				renderInput={params => {
					return (
						<InputField
							{...params}
							className='autocomplete-input'
							inputRef={inputRef}
							test-type='autocomplete'
							name={props.name}
							label={label}
							isLoading={isLoading}
							isReadOnly={isReadOnly}
							required={props.required}
							error={!!(error && error.message)}
							sx={{
								'&:hover .add-new-item-dialog-in-autocomplete': { opacity: 1 },
							}}
							slotProps={{
								input: {
									...params.InputProps,
									endAdornment: (
										<Box display={'flex'} alignItems={'center'} gap={1}>
											{params.InputProps.endAdornment}

											<IconButton
												className='add-new-item-dialog-in-autocomplete'
												onClick={handleAddNewItem}
												size={'small'}
												icon={'AddCircleIcon'}
												sx={{
													display:
														addNewItemForm && !isError ? 'inline-flex' : 'none',
													p: 0.3,
													opacity: 0,
												}}
											/>

											{/* <Chip
												variant='outlined'
												color='error'
												size='small'
												icon={<ErrorIcon />}
												deleteIcon={<RefreshIcon />}
												onDelete={refetch}
												label={t('messages.errorLoadingData')}
												sx={{
													display: isError ? 'inline-flex' : 'none',
												}}
											/> */}
										</Box>
									),
								},
							}}
						/>
					)
				}}
				renderGroup={params => (
					<li key={params.key}>
						<GroupHeader>{params.group}</GroupHeader>
						<GroupItems>{params.children}</GroupItems>
					</li>
				)}
				{...props}
			/>
		)
	}
)

const GroupHeader = styled('div')(({ theme }) => ({
	position: 'sticky',
	top: '-8px',
	padding: '4px 10px',
	color: theme.palette.secondary.main,
	backgroundColor:
		theme.palette.mode === 'light'
			? lighten(theme.palette.secondary.light, 0.85)
			: darken(theme.palette.secondary.main, 0.8),
}))

const GroupItems = styled('ul')({
	padding: 0,
})

function formatValue(key, value, t) {
	if (value == null || !key) return ''

	// const normalizedKey = key?.toLowerCase()

	// let dateType = null

	// if (normalizedKey.includes('date')) dateType = DATE
	// if (normalizedKey.includes('time')) dateType = DATETIME

	// if (dateType && isValidDate(value)) {
	// 	return formattingDateTime(value, dateType, i18next.language)
	// }

	return t(value.toString())
}

function getOption(option, key, t) {
	return typeof option === 'string'
		? option
		: formatValue(key, option?.[key], t)
}

const Label = React.memo(
	({ isHighlighted, option, t, labelKey = undefined }) => {
		const value = labelKey ? formatValue(labelKey, option[labelKey], t) : option

		return (
			<span style={{ fontWeight: isHighlighted ? 600 : 400 }}>{value}</span>
		)
	}
)

const extractFieldsFromRow = (
	addFieldsToIds: string[],
	rowValues: Record<string, any>
) => {
	if (!addFieldsToIds || !rowValues) return
	const newValues: Record<string, any> = {}

	addFieldsToIds.forEach((fieldName: string) => {
		const valueField = rowValues[fieldName]
		if (valueField !== undefined) {
			newValues[fieldName] = valueField
		}
	})

	return newValues
}
