import { useAppStore } from '@/store'
import { Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export const useTableCustomization = ({ table }) => {
	const { t } = useTranslation()
	const widgetData = useAppStore().getElementsById(table.options.meta.widgetName)
	const fetchSaveData = widgetData?.blocks?.[0]?.enableTableByRequest

	const { data: tableConfig } = useQuery({
		queryKey: ['tableCustomization', table.options.meta.widgetName],
		queryFn: async () => (fetchSaveData ? await fetchSaveData() : null),
		enabled: !!fetchSaveData,
		staleTime: Infinity,
		retry: false,
	})

	useEffect(() => {
		if (!tableConfig?.enable) return

		table.setOptions(prev => ({
			...prev,
			renderCaption: () => <Typography variant='h6'>{t(tableConfig.caption)}</Typography>,
			...(tableConfig.hideTable && {
				muiTableContainerProps: { sx: { display: 'block' } },
				muiTableHeadProps: { sx: { display: 'none' } },
				muiTableBodyProps: { sx: { display: 'none' } },
			}),
		}))
	}, [tableConfig, table, t])
}
