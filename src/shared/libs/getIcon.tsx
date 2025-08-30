import { AccountTree, SearchOutlined } from '@mui/icons-material'
import AddIcon from '@mui/icons-material/Add'
import AddCircleIcon from '@mui/icons-material/AddCircleOutlineOutlined'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import AttachFileIcon from '@mui/icons-material/AttachFile'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import CancelIcon from '@mui/icons-material/Cancel'
import CheckIcon from '@mui/icons-material/Check'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CollapseIcon from '@mui/icons-material/ChevronRight'
import { default as CloseIcon } from '@mui/icons-material/CloseOutlined'
import ClipboardPasteIcon from '@mui/icons-material/ContentPasteGo'
import DashboardIcon from '@mui/icons-material/Dashboard'
import DeleteIcon from '@mui/icons-material/DeleteOutlineOutlined'
import DoneIcon from '@mui/icons-material/Done'
import DownloadIcon from '@mui/icons-material/Download'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import FullscreenIcon from '@mui/icons-material/Fullscreen'
import HomeIcon from '@mui/icons-material/Home'
import InfoIcon from '@mui/icons-material/Info'
import MenuIcon from '@mui/icons-material/Menu'
import EditIcon from '@mui/icons-material/ModeEditOutlineOutlined'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import NorthEastIcon from '@mui/icons-material/NorthEast'
import RemoveIcon from '@mui/icons-material/Remove'
import ReorderIcon from '@mui/icons-material/Reorder'
import RestartAltIcon from '@mui/icons-material/RestartAlt'
import SaveIcon from '@mui/icons-material/SaveRounded'
import SettingsIcon from '@mui/icons-material/Settings'
import SouthWestIcon from '@mui/icons-material/SouthWest'
import ChartIcon from '@mui/icons-material/SsidChart'
import TrendingDownIcon from '@mui/icons-material/TrendingDown'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore'
import UploadFileIcon from '@mui/icons-material/UploadFile'
import DoneOutlinedIcon from '@mui/icons-material/VerifiedOutlined'
import ShowIcon from '@mui/icons-material/VerticalAlignTop'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import WarningIcon from '@mui/icons-material/Warning'
import WrapTextIcon from '@mui/icons-material/WrapText'
import CircularProgress from '@mui/material/CircularProgress'
import { ReactElement } from 'react'
import { TypeIcon } from '../model/types'

export const getIcon = (
	icon: TypeIcon | null
): ReactElement | undefined | string => {
	if (!icon) return undefined

	switch (icon) {
		case 'Apps':
			return <></>
		case 'ArrowUpwardIcon':
			return <ArrowUpwardIcon />
		case 'ArrowDownwardIcon':
			return <ArrowDownwardIcon />
		case 'HomeIcon':
			return <HomeIcon />
		case 'TrendingUpIcon':
			return <TrendingUpIcon />
		case 'TrendingDownIcon':
			return <TrendingDownIcon />
		case 'Brightness7Icon':
			return <Brightness7Icon sx={{ color: 'white' }} />
		case 'Brightness4Icon':
			return <Brightness4Icon />
		case 'ShowIcon':
			return <ShowIcon sx={{ rotate: '90deg' }} />
		case 'DashboardIcon':
			return <DashboardIcon />
		case 'UnfoldMoreIcon':
			return <UnfoldMoreIcon />
		case 'WidgetsIcon':
			return <DashboardIcon />
		case 'AccountTree':
			return <AccountTree />
		case 'Search':
			return <SearchOutlined sx={{ color: '#44483E', mr: 2 }} />
		case 'MenuIcon':
			return <MenuIcon />
		case 'AddIcon':
			return <AddIcon fontSize={'small'} />
		case 'CloseIcon':
			return <CloseIcon color={'action'} />
		case 'EditIcon':
			return <EditIcon fontSize={'small'} />
		case 'AddCircleIcon':
			return <AddCircleIcon fontSize={'small'} />
		case 'DeleteIcon':
			return <DeleteIcon fontSize={'small'} />
		case 'CircularProgress':
			return <CircularProgress size={15} />
		case 'SaveIcon':
			return <SaveIcon fontSize={'small'} />
		case 'SettingsIcon':
			return <SettingsIcon />
		case 'FullscreenIcon':
			return <FullscreenIcon fontSize={'small'} />
		case 'ClipboardPasteIcon':
			return <ClipboardPasteIcon fontSize={'small'} />
		case 'ChartIcon':
			return <ChartIcon fontSize={'small'} />
		case 'UploadFileIcon':
			return <UploadFileIcon fontSize={'small'} />
		case 'DownloadIcon':
			return <DownloadIcon fontSize={'small'} />
		case 'CheckIcon':
			return <CheckIcon />
		case 'ExpandMoreIcon':
			return <ExpandMoreIcon />
		case 'CheckCircleIcon':
			return <CheckCircleIcon />
		case 'CancelIcon':
			return <CancelIcon />
		case 'WarningIcon':
			return <WarningIcon fontSize={'inherit'} />
		case 'InfoIcon':
			return <InfoIcon />
		case 'ReorderIcon':
			return <ReorderIcon />
		case 'WrapTextIcon':
			return <WrapTextIcon />
		case 'MoreVertIcon':
			return <MoreVertIcon fontSize={'small'} />
		case 'CollapseIcon':
			return <CollapseIcon />
		case 'AttachFileIcon':
			return <AttachFileIcon />
		case 'ResetIcon':
			return <RestartAltIcon />
		case 'DoneIcon':
			return <DoneIcon color={'success'} />
		case 'NotDoneIcon':
			return <DoneOutlinedIcon />
		case 'RemoveIcon':
			return <RemoveIcon />
		case 'VisibilityOnIcon':
			return <VisibilityOutlinedIcon color={'action'} />
		case 'VisibilityOffIcon':
			return <VisibilityOffOutlinedIcon color={'action'} />
		case 'InflowIcon':
			return <SouthWestIcon />
		case 'OutflowIcon':
			return <NorthEastIcon />

		default:
			return icon
	}
}
