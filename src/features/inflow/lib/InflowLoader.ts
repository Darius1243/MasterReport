import { apolloClient } from '@/apolloClient'
import {
	GetAllFacilitiesDocument,
	GetAllJobsDocument,
	GetAllPersonsDocument,
} from '@/generated/graphql'
import { widgetConstructorInLoader } from '@/shared/libs/widgetConstructor'
import { InflowElements } from '@/shared/model/constants'
import { IWidget } from '@/shared/model/types'

export async function InflowLoader() {
	try {
		const [personsResult, jobsResult, facilitiesResult] = await Promise.all([
			apolloClient.query({ query: GetAllPersonsDocument }),
			apolloClient.query({ query: GetAllJobsDocument }),
			apolloClient.query({ query: GetAllFacilitiesDocument }),
		])

		const newWidget: IWidget = {
			...InflowElements,
			fields: {
				...InflowElements.fields,
				person: { ...InflowElements.fields.person, options: personsResult.data.persons },
				job: { ...InflowElements.fields.job, options: jobsResult.data.jobs },
				facility: { ...InflowElements.fields.facility, options: facilitiesResult.data.facilities },
			},
		}

		return widgetConstructorInLoader(newWidget)
	} catch (error) {
		console.error('Error loading data in InflowLoader:', error)
	}

	return widgetConstructorInLoader(InflowElements)
}