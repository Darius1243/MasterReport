import { Facility } from '@/generated/graphql'
import { useGetFacilities } from '@/shared/hooks/facility'
import { ListWithDetails } from '@/shared/ui/listWithDetails'
import { FacilityDetails } from './FacilityDetails'

export const FacilitiesList = () => {
	const { data, loading, error } = useGetFacilities()

	return (
		<ListWithDetails<Facility>
			data={data}
			loading={loading}
			error={error}
			addButtonLabel={'Добавить объект'}
		>
			{FacilityDetails}
		</ListWithDetails>
	)
}
