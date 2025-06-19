import { gql } from '@apollo/client'

export const GET_ALL_JOBS = gql`
	query GetAllJobs {
		jobs {
			id
			name
		}
	}
`

export const GET_JOB_BY_ID = gql`
	query GetJobById($id: Int!) {
		job(id: $id) {
			id
			name
		}
	}
`

export const CREATE_JOB = gql`
	mutation CreateJob($data: JobCreateInput!) {
		createJob(data: $data) {
			name
		}
	}
`

export const UPDATE_JOB = gql`
	mutation UpdateJob($id: Int!, $data: JobUpdateInput!) {
		updateJob(id: $id, data: $data) {
			id
			name
		}
	}
`

export const DELETE_JOB = gql`
	mutation DeleteJob($id: Int!) {
		deleteJob(id: $id)
	}
`
