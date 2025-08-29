import { useGetInflowsByPersonId } from '@/shared/hooks/inflow'
import { AmountButtonWithDetails } from '@/shared/ui/amountButton'
import { Inflows } from './Inflows'

export const InflowByPerson = ({
	id,
	amount,
}: {
	id: number
	amount: number
}) => {
	const { getInflows, data, loading } = useGetInflowsByPersonId(id)

	return (
		<AmountButtonWithDetails
			amount={amount}
			loading={loading}
			getData={getInflows}
		>
			<Inflows data={data} />
		</AmountButtonWithDetails>
	)
}
