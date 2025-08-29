import { useMutationEntity } from '../useMutationEntity'
import {
	GET_FACILITY_BY_ID,
	CREATE_FACILITY,
	UPDATE_FACILITY,
	DELETE_FACILITY,
	GET_ALL_FACILITIES,
} from '@/entities/user/api/facilityQueries'

export function useMutationFacility(id?: number) {
	const {
		entityQuery,
		create,
		update,
		deleteItem,
		createResult,
		updateResult,
		deleteResult,
		isLoading,
	} = useMutationEntity(
		{
			getByIdQuery: GET_FACILITY_BY_ID,
			createQuery: CREATE_FACILITY,
			updateQuery: UPDATE_FACILITY,
			deleteQuery: DELETE_FACILITY,
			refetchQuery: GET_ALL_FACILITIES,
			entityNameRu: 'объекта',
		},
		id
	)

	return {
		facility: entityQuery,
		create,
		update,
		deleteItem,
		createFacilityResult: createResult,
		updateFacilityResult: updateResult,
		deleteFacilityResult: deleteResult,
		isLoading,
	}
}