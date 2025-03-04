import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Logo from '../assests/logo.svg';
import { Link } from 'react-router';


const pages = [
    { name: 'Home', link: '' },
    { name: 'Features', link: 'features' },
    { name: 'Pricing', link: 'pricing' },
    { name: 'Blog', link: 'blog' },
    { name: 'Contact', link: '' }
];

function CommonHeader() {


    return (
        <AppBar position="static" className='header'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <img src={Logo} alt="Logo" />

                    <Box className="div-center header-menu-section display-sm-none" sx={{ flexGrow: 1}}>
                        {pages.map((e, i) => (
                            <Button
                                key={i}
                                className='menu-buttons'
                                sx={{ my: 2 }}
                            >
                                <Link to={'/' + e.link} style={{ textDecoration: 'none', color: '#1C163C' }}>{e.name}</Link>
                            </Button>
                        ))}
                    </Box>

                    <Box className="header-right-section div-center display-sm-none">
                        <div className='signin'>
                            Login
                        </div>
                        <div className='signup div-center'>
                            Book a Demo
                        </div>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
}
export default CommonHeader