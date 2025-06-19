import { BORDER_RADIUS } from '@constants/Constants'
import SearchIcon from '@mui/icons-material/Search'
import { IconButton, InputBase, styled } from '@mui/material'
import { Box } from '@mui/system'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

type TableGlobalFilterProps = {
	setGlobalFilter: (filter: string) => void
}

export const TableGlobalFilter: React.FC<TableGlobalFilterProps> = ({ setGlobalFilter }) => {
	const { t } = useTranslation()
	const [filter, setFilter] = useState('')

	useEffect(() => {
		if (filter === '') setGlobalFilter('')
	}, [filter])

	return (
		<SearchBox>
			<InputBase
				value={filter}
				onChange={e => setFilter(e.target.value)}
				placeholder={t('mrtLocalization.searchTable')}
				inputProps={{ 'aria-label': 'search' }}
			/>
			<IconButton type='button' sx={{ p: '0.3em' }} aria-label='search' onClick={() => setGlobalFilter(filter)}>
				<SearchIcon />
			</IconButton>
		</SearchBox>
	)
}

const SearchBox = styled(Box)(({}) => ({
	border: '2px solid #d1cdcd',
	paddingLeft: '0.3em',
	borderRadius: BORDER_RADIUS,
	'&:focus-within': {
		borderColor: '#2e2c2c',
	},
	display: 'flex',
	width: '100%',
}))
