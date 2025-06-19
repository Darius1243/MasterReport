import {
	Checkbox,
	CheckboxProps,
	FormControlLabel,
	Tooltip,
	Typography,
} from '@mui/material'
import { forwardRef } from 'react'
import { useTranslation } from 'react-i18next'
import { ControlLoader } from '../../ControlLoader'

interface BaseCheckBoxProps extends CheckboxProps {
	label?: string
	tooltip?: string
	isLoading?: boolean
	isReadOnly?: boolean
}

export const BaseCheckBox = forwardRef<HTMLButtonElement, BaseCheckBoxProps>(
	(
		{
			label,
			tooltip = '',
			isLoading = false,
			isReadOnly = false,
			name,
			value,
			checked,
			onChange,
			...props
		},
		ref
	) => {
		const { t } = useTranslation()

		const newChecked =
			value === 'Y' ? true : value === 'N' ? false : Boolean(value ?? checked)

		return (
			<ControlLoader isLoading={isLoading}>
				<FormControlLabel
					className={props.className}
					inputRef={ref}
					label={label && <Typography noWrap>{t(label)}</Typography>}
					sx={{ ...props.sx, mr: !label ? 0 : undefined }}
					control={
						<Tooltip title={t(tooltip)}>
							<Checkbox
								name={name}
								test-type='checkbox'
								readOnly={isReadOnly}
								checked={newChecked}
								onChange={isReadOnly ? undefined : onChange}
								{...props}
							/>
						</Tooltip>
					}
				/>
			</ControlLoader>
		)
	}
)
