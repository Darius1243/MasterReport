import { useAppStore } from '@/store'

export const getAdornment = (item, selectedUnitOptions) => {
	const currentSystemId = useAppStore.getState().selectedUnit?.systemId
	const customAdornment = item[currentSystemId]
	const adornment = customAdornment
		? customAdornment.label || customAdornment.measureLabel
		: (selectedUnitOptions?.[item.classId]?.label ?? '')

	return adornment ? `measureLabel.${adornment}` : ''
}
