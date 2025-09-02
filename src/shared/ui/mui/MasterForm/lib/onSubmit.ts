import { IOnSubmit } from '@/shared/model/types'
import { showToastPromise } from '@/shared/ui/toast'

const TEXTS = {
	pending: 'Обработка данных... ⏳',
	success: 'Данные успешно сохранены!',
	error: 'Ошибка при сохранении данных 😥',
}

export const onSubmit = async ({
	id,
	data,
	update,
	create,
	reset,
	refetch,
	onCloseModal,
}: IOnSubmit) => {
	const dataToSubmit = Object.fromEntries(
		Object.entries(data).filter(([key]) => !key.startsWith('_'))
	)

	if ('id' in dataToSubmit) {
		delete (dataToSubmit as { id?: unknown }).id
	}

	const submitPromise = async () => {
		const response = await (id
			? update({ variables: { id, data: dataToSubmit } })
			: create({ variables: { data: dataToSubmit } }))

		reset()
		refetch?.()
		onCloseModal?.()
		return response
	}

	await showToastPromise(submitPromise(), TEXTS)
}
