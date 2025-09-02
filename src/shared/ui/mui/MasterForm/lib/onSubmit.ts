import { IOnSubmit } from '@/shared/model/types'
import { showToastPromise } from '@/shared/ui/toast'

const TEXTS = {
	pending: 'Обработка данных... ⏳',
	success: 'Данные успешно сохранены!',
	error: 'Ошибка при сохранении данных 😥',
}

export const onSubmit = async <TCreate extends object, TUpdate extends object>({
	id,
	data,
	update,
	create,
	reset,
	refetch,
	onCloseModal,
}: IOnSubmit<TCreate, TUpdate>) => {
	const dataToSubmit = Object.fromEntries(
		Object.entries(data).filter(([key]) => !key.startsWith('_'))
	)

	if ('id' in dataToSubmit) {
		delete (dataToSubmit as { id?: unknown }).id
	}

	const submitPromise = async () => {
		const response = await (id
			? update({ variables: { id, data: dataToSubmit as TUpdate } })
			: create({ variables: { data: dataToSubmit as TCreate } }))

		reset()
		refetch?.()
		onCloseModal?.()
		return response
	}

	await showToastPromise(submitPromise(), TEXTS)
}
