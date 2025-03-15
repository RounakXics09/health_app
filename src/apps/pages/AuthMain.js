import { Box, Grid2 } from '@mui/material'
import React, { useEffect } from 'react'
import Login from '../auth/Login'
import Logo from '../assests/logo.svg'
import TopFruit from '../assests/TopFruit.svg'
import LoginSvg from '../assests/LoginSvg.svg'
import SuccessAuthSvg from '../assests/SuccessAuthSvg.svg'
import RegisterSvg from '../assests/RegisterSvg.svg'
import BottomFruit from '../assests/BottomFruit.svg'
import { useLocation } from 'react-router'
import Register from '../auth/Register'
import ForgotPassword from '../auth/ForgotPassword'

function AuthMain() {

    const location = useLocation();
    useEffect(() => {
        authCheck()
    }, [])


    function authCheck() {
        const isAuthRoute = location.pathname.includes("/auth");
        const isLastRoute = location.pathname.split('/');
        const page = isLastRoute[isLastRoute.length - 1];
        console.log("location.pathname", isLastRoute[isLastRoute.length - 1])
        return page
    }

    return (
        <Box sx={{ height: '100vh' }}>
            <Grid2 container sx={{ position: 'relative' }}>
                <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }} sx={{ background: '#F3F5F7' }} className="div-center display-sm-none">
                    {
                        authCheck() === 'register' ?
                            <img src={RegisterSvg} style={{ zIndex: 4 }} /> :
                            authCheck() === 'success' ?
                                <img src={LoginSvg} style={{ zIndex: 4 }} /> :
                                <img src={LoginSvg} style={{ zIndex: 4 }} />
                    }
                    <Grid2 sx={{ position: 'absolute', left: '30px', top: '40px' }}>
                        <img src={Logo} style={{ zIndex: 2 }} />
                    </Grid2>
                    <Grid2 sx={{ position: 'absolute', right: '0px', top: '0px' }}>
                        <img src={TopFruit} style={{ zIndex: 2 }} />
                    </Grid2>
                    <Grid2 sx={{ position: 'absolute', left: '0px', bottom: '0px' }}>
                        <img src={BottomFruit} />
                    </Grid2>
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }} sx={{ background: '#FFFFFF' }}>
                    {
                        authCheck() === 'login' ?
                            <Login /> :
                            authCheck() === 'register' ?
                                <Register /> : <ForgotPassword />
                    }
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default AuthMain