import { InsertDriveFile } from '@mui/icons-material'
import { Avatar } from '@mui/material'

export const getFileIcon = (type: string) => {
	switch (type) {
		case 'application/pdf':
			return (
				<Avatar>
					<InsertDriveFile />
				</Avatar>
			)
		default:
			return (
				<Avatar>
					<InsertDriveFile />
				</Avatar>
			)
	}
}
