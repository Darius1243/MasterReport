import { Inflow } from '@/generated/graphql'
import { formatDate } from '@/shared/libs'
import { FieldConfig } from '@/shared/model/types'
import { AmountButton } from '@/shared/ui/amountButton'
import { MonetaryList } from '@/shared/ui/monetaryList'

const inflowFields: FieldConfig<Inflow>[] = [
	{ render: item => item.person.name },
	{ render: item => item.facility.name },
	{ render: item => item.job?.name },
	{ render: v => <AmountButton amount={v.amount} /> },
	{ render: v => formatDate(v.date) },
]

export const Inflows = ({ data }: { data: Inflow[] }) => {
	return <MonetaryList data={data} fields={inflowFields} title='Приходы' />
}
