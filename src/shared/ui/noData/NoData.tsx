import { InsertDriveFileOutlined } from '@mui/icons-material'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { ReactNode } from 'react'

type NoDataType = 'empty-documents' | 'default'

interface NoDataProps {
	type?: NoDataType
	title?: string
	description?: string
	icon?: ReactNode
}

const templates = {
	'empty-documents': {
		icon: <InsertDriveFileOutlined sx={{ fontSize: 60 }} color="action" />,
		title: 'Список документов пуст',
		description:
			'Вы можете добавить новый документ или отсканировать QR-код.',
	},
	default: {
		icon: undefined,
		title: 'Нет данных',
		description: undefined,
	},
}

export const NoData = ({
	type = 'default',
	title,
	description,
	icon,
}: NoDataProps) => {
	const template = templates[type] || templates.default

	const finalTitle = title || template.title
	const finalDescription = description || template.description
	const finalIcon = icon || template.icon

	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				gap: 2,
				p: 3,
				textAlign: 'center',
			}}
		>
			{finalIcon}
			<Typography variant="h6">{finalTitle}</Typography>
			{finalDescription && (
				<Typography color="text.secondary">{finalDescription}</Typography>
			)}
		</Box>
	)
}
