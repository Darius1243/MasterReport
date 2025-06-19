import Grid from '@mui/material/Grid'
import { MasterForm } from '../../form'

export const MasterFormsIntoMRTable = ({ ids, forms, isEditable }) => {
	return forms ? (
		<Grid container data-testid={'GridContainer'} spacing={0} pb={1}>
			{forms.map((form, index) => {
				return (
					<Grid data-testid={'GridItem'} key={index} size={form.colWidth || 12}>
						<MasterForm
							key={index}
							elements={form.elements}
							crud={crud}
							isInWidget={false}
							externalIsEditable={isEditable && form.isEditable}
						/>
					</Grid>
				)
			})}
		</Grid>
	) : null
}
