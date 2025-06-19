import { useGetInflowsByPersonId } from '@/shared/hooks/inflow'
import { Inflows } from '@features/inflow/ui'
import { DetailsPopover } from '@features/monetaryStatistics/ui/DetailsPopover'
import { useState } from 'react'
import { AmountButton } from './AmountButton'

export const AmountButtonWithDetails = ({
	amount,
	id,
}: {
	amount: number
	id: number
}) => {
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
	const { getInflows, data, loading } = useGetInflowsByPersonId(id)

	const open = Boolean(anchorEl)

	const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
		const currentTarget = e.currentTarget

		await getInflows()
		setAnchorEl(currentTarget)
	}

	return (
		<>
			<AmountButton amount={amount} isLoading={loading} onClick={handleClick} />

			<DetailsPopover
				open={open}
				anchorEl={anchorEl}
				onClose={() => setAnchorEl(null)}
			>
				<Inflows data={data} />
			</DetailsPopover>
		</>
	)
}
