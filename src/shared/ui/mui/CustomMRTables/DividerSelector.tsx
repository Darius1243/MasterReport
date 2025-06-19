import { useAppStore } from '@/store'
import { FormControlLabel, Radio, RadioGroup } from '@mui/material'
import { Box } from '@mui/system'
import { StorageService } from '@services/StorageService'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useDebouncedCallback } from 'use-debounce'

export const DividerSelector = ({
	widgetName,
}: {
	widgetName: string | null | undefined
}) => {
	const { setSelectedDivider, selectedDivider } = useAppStore()
	const queryClient = useQueryClient()
	const {
		t,
		i18n: { language },
	} = useTranslation()

	const { data, isLoading } = useQuery({
		queryKey: ['dividerOptions'],
		queryFn: async () =>
			(await StorageService.get(queryClient, 'dividerOptions')) ?? {},
		staleTime: 1000 * 60 * 2,
	})

	const filteredDividers = useMemo(
		() =>
			dividerOptions(t).map(item => ({
				...item,
				checked: Number(item.value) === Number(selectedDivider),
			})),
		[selectedDivider, language]
	)

	const updateSelectedDivider = useDebouncedCallback(divider => {
		StorageService.set(queryClient, `dividerOptions`, { [widgetName]: divider })
	}, 0)

	const handleSelectionChange = e => {
		const divider = e?.target?.value
		setSelectedDivider(divider)
		updateSelectedDivider(divider)
	}

	useEffect(() => {
		if (!isLoading) {
			setSelectedDivider(data[widgetName])
		}
	}, [isLoading])

	return (
		<Box
			width={'100%'}
			justifyContent={'center'}
			alignContent={'center'}
			display={'flex'}
			flexDirection={'row'}
		>
			<Box flexDirection={'column'}>
				<>{t('dividerSelector.fastInputOfDecimalNumbers')}</>
				<RadioGroup row onChange={handleSelectionChange}>
					{filteredDividers?.map(({ value, label, checked }) => (
						<FormControlLabel
							key={value}
							value={value}
							checked={checked}
							control={<Radio />}
							label={label}
						/>
					))}
				</RadioGroup>
			</Box>
		</Box>
	)
}

const dividerOptions = t => {
	return [
		{
			label: t('dividerSelector.notSelected'),
			value: 1,
			checked: false,
		},
		{
			label: '/10',
			value: 0.1,
			checked: false,
		},
		{
			label: '/100',
			value: 0.01,
			checked: false,
		},
		{
			label: '/1000',
			value: 0.001,
			checked: false,
		},
	]
}
