import { Facility } from '@/generated/graphql'
import { useMutationFacility } from '@/shared/hooks/facility'
import { STRING_FORM } from '@/shared/model/constants'
import { IFields } from '@/shared/model/types/TypeInputField'
import { EntityDetails } from '@/shared/ui'

export const FacilityDetails = (props: {
	id?: number
	item?: Facility
	onCloseModal?: () => void
}) => {
	const {
		facility: { data, error },
		create,
		update,
		deleteItem,
		isLoading,
	} = useMutationFacility(props.item ? undefined : props.id)

	return (
		<EntityDetails<Facility>
			{...props}
			data={data?.facility}
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
		label: 'Объект',
		type: STRING_FORM,
		required: true,
	},
}
