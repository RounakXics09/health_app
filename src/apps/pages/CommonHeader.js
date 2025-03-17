import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Logo from '../assests/logo.svg';
import { Link, useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import MenuIcon from '@mui/icons-material/Menu';
import { Divider, Drawer, Grid2, IconButton, List, ListItem, ListItemButton, ListItemText, Typography } from '@mui/material';

const pages = [
    { name: 'Home', link: '' },
    { name: 'Features', link: 'features' },
    { name: 'Pricing', link: 'pricing' },
    { name: 'Blog', link: 'blog' },
    { name: 'Contact', link: 'contact' }
];

const drawerWidth = 240;

function CommonHeader(props) {

    const navigate = useNavigate();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const handleClick = (e) => {
        navigate("/auth/login");
    }

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Grid2 sx={{ py: 3 }}>
                <motion.a
                    href='/'
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center"
                >
                    <img src={Logo} alt="Logo" />
                </motion.a>
            </Grid2>
            <Divider />
            <List>
                {pages.map((item, i) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <Link to={'/' + item.link} style={{ textDecoration: 'none', color: '#1C163C', textAlign: 'center', width: '100%' }}>
                                {item.name}
                            </Link>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box>
            <AppBar position="fixed" className='header'>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <div className="flex items-center display-sm-none">
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

                        <div className="flex items-center display-sm-flex" style={{ display: 'none', justifyContent: 'space-between', width: '100%', alignItems: 'center' }}>
                            <motion.a
                                href='/'
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5 }}
                                className="flex items-center"
                            >
                                <img src={Logo} alt="Logo" />
                            </motion.a>
                            <IconButton
                                color="#000000"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2, display: { sm: 'none' } }}
                            >
                                <MenuIcon />
                            </IconButton>
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
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </Box>
    );
}
export default CommonHeader