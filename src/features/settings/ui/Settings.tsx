import { MuiTabs } from '@/shared/ui/mui'
import { FacilitiesList } from '@features/facilities/ui'
import { JobList } from '@features/job/ui/JobsList'
import { PersonsList } from '@features/persons/ui'

const TABS = [
	{ label: 'Лица', component: <PersonsList /> },
	{ label: 'Объекты', component: <FacilitiesList /> },
	{ label: 'Виды работ', component: <JobList /> },
]

export const Settings = () => {
	return <MuiTabs tabs={TABS} />
}
