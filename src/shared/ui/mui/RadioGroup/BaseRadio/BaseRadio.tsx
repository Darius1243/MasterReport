import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormHelperText from '@mui/material/FormHelperText'
import Radio from '@mui/material/Radio'
import { forwardRef } from 'react'
import { useTranslation } from 'react-i18next'

export const BaseRadio = forwardRef(
	({ checked, label = undefined, isReadOnly = false, error = undefined, ...props }, ref) => {
		const { t } = useTranslation()
		const helperText = error ? t(error?.message?.toString()) : null

		return (
			<FormControl error={!!error}>
				<FormControlLabel
					// inputRef={ref}
					label={label ? t(label) : undefined}
					value={checked}
					control={<Radio readOnly={isReadOnly} test-type='radio' size='small' {...props} />}
				/>

				<FormHelperText>{helperText}</FormHelperText>
			</FormControl>
		)
	},
)
