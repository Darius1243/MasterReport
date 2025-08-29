import { useGetEntities } from '../useGetEntities'
import { GET_ALL_PERSONS } from '@/entities/user/api/personQueries'
import { GetAllPersonsQuery } from '@/generated/graphql'

export function useGetPersons() {
	return useGetEntities<GetAllPersonsQuery>(GET_ALL_PERSONS, 'persons')
}