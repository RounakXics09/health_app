import { Box, Grid2 } from '@mui/material'
import React from 'react'
import Login from '../auth/Login'
import Logo from '../assests/logo.svg'
import TopFruit from '../assests/TopFruit.svg'
import LoginSvg from '../assests/LoginSvg.svg'
import BottomFruit from '../assests/BottomFruit.svg'

function AuthMain() {
    return (
        <Box sx={{ height: '100vh' }}>
            <Grid2 container sx={{ position: 'relative' }}>
                <Grid2 item size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }} sx={{ background: '#F3F5F7' }} className="div-center">
                    <img src={LoginSvg} style={{zIndex:4}} />
                    <Grid2 sx={{position:'absolute',left:'30px',top:'40px'}}>
                        <img src={Logo} style={{zIndex:2}}/>
                    </Grid2>
                    <Grid2 sx={{position:'absolute',right:'0px',top:'0px'}}>
                        <img src={TopFruit} style={{zIndex:2}}/>
                    </Grid2>
                    <Grid2 sx={{position:'absolute',left:'0px',bottom:'0px'}}>
                        <img src={BottomFruit} />
                    </Grid2>
                </Grid2>
                <Grid2 item size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }} sx={{ background: '#FFFFFF' }}>
                    <Login />
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default AuthMain