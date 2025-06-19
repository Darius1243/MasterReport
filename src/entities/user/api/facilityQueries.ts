import { gql } from '@apollo/client'

export const GET_ALL_FACILITIES = gql`
	query GetAllFacilities {
		facilities {
			id
			name
		}
	}
`

export const GET_FACILITY_BY_ID = gql`
	query GetFacilityById($id: Int!) {
		facility(id: $id) {
			id
			name
		}
	}
`

export const CREATE_FACILITY = gql`
	mutation CreateFacility($data: FacilityCreateInput!) {
		createFacility(data: $data) {
			name
		}
	}
`

export const UPDATE_FACILITY = gql`
	mutation UpdateFacility($id: Int!, $data: FacilityUpdateInput!) {
		updateFacility(id: $id, data: $data) {
			id
			name
		}
	}
`

export const DELETE_FACILITY = gql`
	mutation DeleteFacility($id: Int!) {
		deleteFacility(id: $id)
	}
`
