import { gql } from '@apollo/client'

export const GET_ALL_INFLOWS = gql`
	query GetAllInflows {
		inflows {
			id
			personId
			facilityId
			jobId
			amount
			date
		}
	}
`

export const GET_INFLOW_BY_ID = gql`
	query GetInflowById($id: Int!) {
		inflow(id: $id) {
			id
			personId
			facilityId
			jobId
			amount
			date
		}
	}
`

export const GET_INFLOW_BY_PERSON_ID = gql`
	query GetInflowsByPersonId($personId: Int!) {
		inflowsByPersonId(personId: $personId) {
			id
			amount
			date
			person {
				name
			}
			facility {
				name
			}
			job {
				name
			}
		}
	}
`

export const CREATE_INFLOW = gql`
	mutation CreateInflow($data: InflowApiCreateInput!) {
		createInflow(data: $data) {
			personId
			facilityId
			jobId
			amount
			date
		}
	}
`

export const UPDATE_INFLOW = gql`
	mutation UpdateInflow($id: Int!, $data: InflowUpdateInput!) {
		updateInflow(id: $id, data: $data) {
			id
			personId
			facilityId
			jobId
			amount
			date
		}
	}
`

export const DELETE_INFLOW = gql`
	mutation DeleteInflow($id: Int!) {
		deleteInflow(id: $id)
	}
`
