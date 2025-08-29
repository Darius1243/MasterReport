import { gql } from '@apollo/client'

export const GET_ALL_OUTFLOWS = gql`
	query GetAllOutflows {
		outflows {
			id
			personId
			facilityId
			amount
			date
		}
	}
`

export const GET_OUTFLOW_BY_ID = gql`
	query GetOutflowById($id: Int!) {
		outflow(id: $id) {
			id
			personId
			facilityId
			amount
			date
		}
	}
`

export const GET_OUTFLOW_BY_PERSON_ID = gql`
	query GetOutflowsByPersonId($personId: Int!) {
		outflowsByPersonId(personId: $personId) {
			id
			amount
			date
			person {
				name
			}
			facility {
				name
			}
		}
	}
`

export const CREATE_OUTFLOW = gql`
	mutation CreateOutflow($data: OutflowApiCreateInput!) {
		createOutflow(data: $data) {
			personId
			facilityId
			amount
			date
		}
	}
`

export const UPDATE_OUTFLOW = gql`
	mutation UpdateOutflow($id: Int!, $data: OutflowUpdateInput!) {
		updateOutflow(id: $id, data: $data) {
			id
			personId
			facilityId
			amount
			date
		}
	}
`

export const DELETE_OUTFLOW = gql`
	mutation DeleteOutflow($id: Int!) {
		deleteOutflow(id: $id)
	}
`
