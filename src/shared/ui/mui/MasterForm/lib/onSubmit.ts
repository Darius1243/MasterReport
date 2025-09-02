import { TData } from '@/shared/model/types'
import { showToastPromise } from '@/shared/ui/toast'

const texts = {
	pending: 'Обработка данных... ⏳',
	success: 'Данные успешно сохранены!',
	error: 'Ошибка при сохранении данных 😥',
}

export const onSubmit = async (
	data: TData,
	fetchData: (data: TData) => Promise<any>
) => {
	const filteredData = Object.fromEntries(
		Object.entries(data).filter(([key]) => !key.startsWith('_'))
	) as TData

	await showToastPromise(fetchData(filteredData), texts)
}
