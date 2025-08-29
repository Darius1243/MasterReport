import { DetailsPopover } from '@features/monetaryStatistics/ui/DetailsPopover'
import { useState } from 'react'
import { AmountButton } from './AmountButton'

interface IAmountButtonWithDetailsProps {
	amount: number
	loading: boolean
	getData: () => Promise<void>
	children: React.ReactNode
}

export const AmountButtonWithDetails = ({
	amount,
	getData,
	loading,
	children,
}: IAmountButtonWithDetailsProps) => {
	const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)
	const open = Boolean(anchorEl)

	const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
		const currentTarget = e.currentTarget

		await getData()
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
				{children}
			</DetailsPopover>
		</>
	)
}
