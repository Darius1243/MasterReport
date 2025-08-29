import { useGetOutflowsByPersonId } from '@/shared/hooks/outflow'
import { AmountButtonWithDetails } from '@/shared/ui/amountButton'
import { Outflows } from './Outflows'

export const OutflowByPerson = ({
	id,
	amount,
}: {
	id: number
	amount: number
}) => {
	const { getOutflow, data, loading } = useGetOutflowsByPersonId(id)

	return (
		<AmountButtonWithDetails
			amount={amount}
			loading={loading}
			getData={getOutflow}
		>
			<Outflows data={data} />
		</AmountButtonWithDetails>
	)
}
