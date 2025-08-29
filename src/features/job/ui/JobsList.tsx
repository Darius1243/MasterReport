import { Job } from '@/generated/graphql'
import { useGetJobs } from '@/shared/hooks/job'
import { ListWithDetails } from '@/shared/ui/listWithDetails'
import { JobDetails } from './JobDetails'

export const JobList = () => {
	const { data, loading, error } = useGetJobs()

	return (
		<ListWithDetails<Job>
			data={data}
			loading={loading}
			error={error}
			addButtonLabel={'Добавить объект'}
		>
			{JobDetails}
		</ListWithDetails>
	)
}
