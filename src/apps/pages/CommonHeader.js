import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Logo from '../assests/logo.svg';
import { Link, useNavigate } from 'react-router';
import { motion } from 'framer-motion';

const pages = [
    { name: 'Home', link: '' },
    { name: 'Features', link: 'features' },
    { name: 'Pricing', link: 'pricing' },
    { name: 'Blog', link: 'blog' },
    { name: 'Contact', link: 'contact' }
];

function CommonHeader() {

    const navigate = useNavigate();

    const handleClick = (e) => {
        navigate("/auth/login");
    }

    return (
        <AppBar position="static" className='header'>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <div className="flex items-center">
                        <motion.a
                            href='/'
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="flex items-center"
                        >
                            <img src={Logo} alt="Logo" />
                        </motion.a>
                    </div>


                    <Box className="div-center header-menu-section display-sm-none" sx={{ flexGrow: 1 }}>
                        {pages.map((e, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: 0.1 * i }}
                            >
                                <Button
                                    key={i}
                                    className='menu-buttons'
                                    sx={{ my: 2 }}
                                >
                                    <Link to={'/' + e.link} style={{ textDecoration: 'none', color: '#1C163C' }}>{e.name}</Link>
                                </Button>
                            </motion.div>
                        ))}
                    </Box>

                    <Box className="header-right-section div-center display-sm-none">
                        <motion.div
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className='signin'
                            onClick={() => { handleClick('login') }}
                        >
                            Login
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            className='signup div-center'
                        >
                            Book a Demo
                        </motion.div>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar >
    );
}
export default CommonHeader