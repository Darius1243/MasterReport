import { useGetEntities } from '../useGetEntities'
import { GET_ALL_FACILITIES } from '@/entities/user/api/facilityQueries'
import { GetAllFacilitiesQuery } from '@/generated/graphql'

export function useGetFacilities() {
	return useGetEntities<GetAllFacilitiesQuery>(GET_ALL_FACILITIES, 'facilities')
}