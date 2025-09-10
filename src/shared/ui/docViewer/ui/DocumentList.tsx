import { ResponsiveGrid } from '../../responsiveGrid'
import { SortableItem } from '../../SortableItem'
import { IDocument } from '../model'
import { File } from './File'

export const DocumentList = ({
	documents,
	onDelete,
}: {
	documents: IDocument[]
	onDelete: (fileName: string) => Promise<void>
}) => {
	return documents.map(doc => (
		<SortableItem key={doc.id} id={doc.id}>
			<ResponsiveGrid item minWidth={'160px'}>
				<File file={doc} onDelete={onDelete} />
			</ResponsiveGrid>
		</SortableItem>
	))
}
