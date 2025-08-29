import { Person } from '@/generated/graphql'
import { useMutationPerson } from '@/shared/hooks/person'
import { STRING_FORM } from '@/shared/model/constants'
import { IFields } from '@/shared/model/types/TypeInputField'
import { EntityDetails } from '@/shared/ui'

export const PersonDetails = (props: {
	id?: number
	item?: Person
	onCloseModal?: () => void
}) => {
	const {
		person: { data, error },
		create,
		update,
		deleteItem,
		isLoading,
	} = useMutationPerson(props.item ? undefined : props.id)

	return (
		<EntityDetails<Person>
			{...props}
			data={data?.person}
			error={error}
			create={create}
			update={update}
			deleteItem={deleteItem}
			isLoading={isLoading}
			fields={fields}
		/>
	)
}

const fields: IFields = {
	name: {
		name: 'name',
		label: 'ФИО',
		type: STRING_FORM,
		required: true,
	},
	email: {
		name: 'email',
		label: 'Email',
		type: STRING_FORM,
	},
}
