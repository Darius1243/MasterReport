import { FormControl, FormLabel, RadioGroup } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { ControlLoader } from '../../ControlLoader'
import { Radio } from '../Radio'

export const BaseRadioGroup = ({
	ref,
	children,
	label = '',
	isLoading = false,
	isReadOnly = false,
	onChange,
	...props
}) => {
	const { t } = useTranslation()

	return (
		<ControlLoader isLoading={isLoading}>
			<FormControl>
				{label ? <FormLabel>{t(label)}</FormLabel> : null}

				<RadioGroup
					ref={ref}
					test-type='radioGroup'
					{...props}
					onChange={isReadOnly ? null : onChange(e)}
				>
					{children?.map(({ value, label }) => {
						return <Radio checked={value} label={label} key={value} />
					})}
				</RadioGroup>
			</FormControl>
		</ControlLoader>
	)
}
