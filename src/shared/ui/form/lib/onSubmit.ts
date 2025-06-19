import { TData } from '@/shared/model/types'
import { showToastPromise } from '../../toast'

export const onSubmit = async (
	data: TData,
	fetchData: (data: TData) => Promise<any>
) => {
	const texts = {
		pending: 'Обработка данных... ⏳',
		success: 'Данные успешно сохранены! 🎉',
		error: 'Ошибка при сохранении данных 😥',
	}

	await showToastPromise(fetchData(data), texts)
}
