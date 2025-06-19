import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'

interface IListSkeletonProps {
	count?: number
	itemHeight?: number | string
}

export const ListSkeleton = ({
	count = 5,
	itemHeight = 40,
}: IListSkeletonProps) => {
	return (
		<Box>
			{Array.from(new Array(count)).map((_, index) => (
				<Skeleton
					key={index}
					variant='text'
					height={itemHeight}
					sx={{ my: 1 }}
				/>
			))}
		</Box>
	)
}
