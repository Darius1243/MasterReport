import { apolloClient } from '@/apolloClient'
import {
	GetAllFacilitiesDocument,
	GetAllJobsDocument,
	GetAllPersonsDocument,
} from '@/generated/graphql'
import { widgetConstructorInLoader } from '@/shared/libs/widgetConstructor'
import { OutflowElements } from '@/shared/model/constants'
import { IWidget } from '@/shared/model/types'

export async function OutflowLoader() {
	try {
		const [personsResult, jobsResult, facilitiesResult] = await Promise.all([
			apolloClient.query({ query: GetAllPersonsDocument }),
			apolloClient.query({ query: GetAllJobsDocument }),
			apolloClient.query({ query: GetAllFacilitiesDocument }),
		])

		const newWidget: IWidget = {
			...OutflowElements,
			fields: {
				...OutflowElements.fields,
				person: {
					...OutflowElements.fields.person,
					options: personsResult.data.persons,
				},
				job: {
					...OutflowElements.fields.job,
					options: jobsResult.data.jobs,
				},
				facility: {
					...OutflowElements.fields.facility,
					options: facilitiesResult.data.facilities,
				},
			},
		}

		return widgetConstructorInLoader(newWidget)
	} catch (error) {
		console.error('Error loading data in OutflowLoader:', error)
	}

	return widgetConstructorInLoader(OutflowElements)
}
