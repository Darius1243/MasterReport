import { TData } from '@/shared/model/types'
import { showToastPromise } from '@/shared/ui/toast'
import { UseFormReturn } from 'react-hook-form'
import { transformData } from './transformData'

interface OnSaveProps {
	id?: number
	crud: {
		create: (args: { variables: { data: any } }) => Promise<any>
		update: (args: { variables: { id: number; data: any } }) => Promise<any>
	}
	methods: UseFormReturn<any>
	refetch?: () => void
	onCloseModal?: () => void
}

export const onSave =
	({ id, crud, methods, refetch, onCloseModal }: OnSaveProps) =>
	async (formData: TData) => {
		const texts = {
			pending: 'Обработка данных... ⏳',
			success: 'Данные успешно сохранены!',
			error: 'Ошибка при сохранении данных 😥',
		}

		const data = transformData(formData, id)

		const promise = id
			? crud.update({ variables: { id, data } })
			: crud.create({ variables: { data } })

		await showToastPromise(promise, texts)

		methods.reset({})
		refetch?.()
		onCloseModal?.()
	}
