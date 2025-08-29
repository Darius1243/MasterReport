import { Job } from '@/generated/graphql'
import { useMutationJob } from '@/shared/hooks/job'
import { STRING_FORM } from '@/shared/model/constants'
import { IFields } from '@/shared/model/types/TypeInputField'
import { EntityDetails } from '@/shared/ui'

export const JobDetails = (props: {
	id?: number
	item?: Job
	onCloseModal?: () => void
}) => {
	const {
		job: { data, error },
		create,
		update,
		deleteItem,
		isLoading,
	} = useMutationJob(props.item ? undefined : props.id)

	return (
		<EntityDetails<Job>
			{...props}
			data={data?.job}
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
		label: 'Вид работы',
		type: STRING_FORM,
		required: true,
	},
}
