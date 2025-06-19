import { useMutationPerson } from '@/shared/hooks/person'
import { STRING_FORM } from '@/shared/model/constants'
import { IFields } from '@/shared/model/types/TypeInputField'
import { MasterForm } from '@/shared/ui/form'

interface IAddEditPersonContent {
	id?: number
	refetch: () => void
	onCloseModal: () => void
}

const fields: IFields = [
	{ name: 'name', label: 'ФИО', type: STRING_FORM, required: true },
	{ name: 'email', label: 'Email', type: STRING_FORM },
]

export const AddEditPersonContent = ({
	id,
	refetch,
	onCloseModal,
}: IAddEditPersonContent) => {
	const {
		person: { data, error },
		create,
		update,
		isLoading,
	} = useMutationPerson(id)

	return (
		<MasterForm
			id={id}
			data={data?.person}
			elements={{ fields }}
			crud={{ create, update }}
			error={error}
			refetch={refetch}
			isLoading={isLoading}
			onCloseModal={onCloseModal}
		/>
	)
}
