import { MuiAppBar } from '@/shared/ui'
import { NavMenu } from '@/shared/ui/navMenu'
import { Box, Toolbar } from '@mui/material'
import { Outlet } from 'react-router'

export const Layout = () => {
    return (
        <Box display={'flex'} minHeight={'100svh'}>
            <MuiAppBar title={'Master Report'} />

            <NavMenu />

            <Box
                component='main'
                flexGrow={1}
                display={'flex'}
                flexDirection={'column'}
                sx={{ p: 2 }}
            >
                <Toolbar variant='dense' />

                <Outlet />
            </Box>
        </Box>
    )
}