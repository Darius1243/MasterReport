import { Outflow } from '@/generated/graphql'
import { formatDate } from '@/shared/libs'
import { FieldConfig } from '@/shared/model/types'
import { AmountButton } from '@/shared/ui/amountButton'
import { MonetaryList } from '@/shared/ui/monetaryList'

const outflowFields: FieldConfig<Outflow>[] = [
	{ render: item => item.person.name },
	{ render: item => item.facility.name },
	{ render: item => <AmountButton amount={-item.amount} /> },
	{ render: item => formatDate(item.date) },
]

export const Outflows = ({ data }: { data: Outflow[] }) => {
	return <MonetaryList data={data} fields={outflowFields} title='Расходы' />
}
