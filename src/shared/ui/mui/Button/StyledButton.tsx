import { IBaseButtonProps } from '@/shared/model/types/IBaseButtonProps'
import { styled } from '@mui/material/styles'
import { Button } from './Button'

export const StyledButton = styled(Button)<IBaseButtonProps>(
	({ isActiveStyle }) => ({
		borderRadius: '100px',
		padding: '10px 16px',
	})
)
