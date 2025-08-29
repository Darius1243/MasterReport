import { gql } from '@apollo/client'

export const GET_ALL_PERSONS = gql`
	query GetAllPersons {
		persons {
			id
			email
			name
		}
	}
`

export const GET_PERSON_BY_ID = gql`
	query GetPersonById($id: Int!) {
		person(id: $id) {
			id
			email
			name
		}
	}
`

export const CREATE_PERSON = gql`
	mutation CreatePerson($data: PersonCreateInput!) {
		createPerson(data: $data) {
			email
			name
		}
	}
`

export const UPDATE_PERSON = gql`
	mutation UpdatePerson($id: Int!, $data: PersonUpdateSimpleInput!) {
		updatePerson(id: $id, data: $data) {
			id
			email
			name
		}
	}
`

export const DELETE_PERSON = gql`
	mutation DeletePerson($id: Int!) {
		deletePerson(id: $id)
	}
`

export const GET_PERSONS_WITH_STATISTICS = gql`
	query GetPersonsWithStatistics {
		personsWithStatistics {
			id
			name
			totalInflowAmount
			inflowIds
			totalOutflowAmount
			outflowIds
		}
	}
`
