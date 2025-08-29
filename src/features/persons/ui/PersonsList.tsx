import { Person } from '@/generated/graphql'
import { useGetPersons } from '@/shared/hooks/person'
import { ListWithDetails } from '@/shared/ui/listWithDetails'
import { PersonDetails } from './PersonDetails'

export const PersonsList = () => {
	const { data, loading, error } = useGetPersons()

	return (
		<ListWithDetails<Person>
			data={data}
			loading={loading}
			error={error}
			addButtonLabel={'Добавить лицо'}
		>
			{PersonDetails}
		</ListWithDetails>
	)
}
