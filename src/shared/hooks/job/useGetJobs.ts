import { useGetEntities } from '../useGetEntities'
import { GET_ALL_JOBS } from '@/entities/user/api/jobQueries'
import { GetAllJobsQuery } from '@/generated/graphql'

export function useGetJobs() {
	return useGetEntities<GetAllJobsQuery>(GET_ALL_JOBS, 'jobs')
}