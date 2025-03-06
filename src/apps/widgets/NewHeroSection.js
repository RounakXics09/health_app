import { Box, Grid2 } from '@mui/material'
import React from 'react'
import NewHero from '../assests/NewHero.svg'
import Triangle from '../assests/Triangle.svg'
import EllipseBack from '../assests/EllipseBack.svg'
import HCard1 from '../assests/HCard1.png'
import HCard2 from '../assests/HCard2.png'
import HCard3 from '../assests/HCard3.png'
import HCard4 from '../assests/HCard4.png'
import HCardTop from '../assests/HCardTop.png'
import RunIcon from '../assests/RunIcon.png'
import HeroCentericon from '../assests/HeroCenterIcon.svg'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function NewHeroSection() {
    return (
        <Box className='div-center d-flex-col position-relative' sx={{
            backgroundImage: `url(${EllipseBack})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100%',
            height: '100%',
            overflow: 'hidden'
        }}>
            <Grid2 container >
                <Grid2 item size={{ xs: 12, sm: 12, md: 8, lg: 8, xl: 8 }}>
                    <Grid2 className='top-ai-text'>
                        <div className='green-circle'></div>
                        AI-Powered Nutrition
                    </Grid2>
                    <Grid2 sx={{ position: 'relative' }}>
                        <Grid2 className='new-hero-heading' sx={{zIndex:'2'}}>
                            Your Personal <span>Diet Coach </span>
                            on WhatsApp
                        </Grid2>
                        <Grid2 className='display-sm-none' sx={{ position: 'absolute', right: '0px', top: '0px',zIndex:'1' }}>
                            <img src={RunIcon} />
                        </Grid2>
                    </Grid2>
                    <Grid2 sx={{ display: 'flex', position: 'relative' }}>
                        <Grid2>
                            <Grid2 className='new-hero-desc'>
                                Get personalized meal plans, nutrition advice, and diet tracking
                            </Grid2>
                            <Grid2 className='new-hero-desc-name'>
                                —all through WhatsApp. Powered by AI.
                            </Grid2>
                            <Grid2 className='position-relative width-100 d-flex-col-sm' sx={{ display: 'flex', alignItems: 'center', pt: 2 }}>
                                <Grid2 className="filled-button-linear">Book a Demo <KeyboardArrowRightIcon fontSize='small' sx={{ paddingLeft: '20px', }} /></Grid2>
                                <Grid2 className="outlined-button-linear">Contact Sales</Grid2>
                            </Grid2>
                        </Grid2>
                        <Grid2 className='display-sm-none'>
                            <Grid2 sx={{ position: 'absolute', right: '-50px', overflow: 'hidden' }}>
                                <img src={HeroCentericon} />
                            </Grid2>
                        </Grid2>
                    </Grid2>
                    <Grid2 container sx={{ py: 3, width: { xs: '100%', sm: '100%', md: '80%', lg: '80%', xl: '80%' }, zIndex: '4' }} rowSpacing={2} columnSpacing={2}>
                        <Grid2 item size={{ xs: 12, sm: 12, md: 3, lg: 3, xl: 3 }}>
                            <Grid2 className='hero-inner-card green-hero-card' sx={{ zIndex: '4' }}>
                                <Grid2 className='hero-inner-icon'>
                                    <img src={HCard1} />
                                </Grid2>
                                <Grid2 className='hero-inner-icon-absolute'>
                                    <img src={HCardTop} />
                                </Grid2>
                                <Grid2 className='hero-inner-text'>Personalized Meal Plans</Grid2>
                                <Grid2 className='hero-inner-desc'>Tailored to your goals and preferences</Grid2>
                            </Grid2>
                        </Grid2>
                        <Grid2 item size={{ xs: 12, sm: 12, md: 3, lg: 3, xl: 3 }}>
                            <Grid2 className='hero-inner-card blue-hero-card'>
                                <Grid2 className='hero-inner-icon'>
                                    <img src={HCard2} />
                                </Grid2>
                                <Grid2 className='hero-inner-icon-absolute'>
                                    <img src={HCardTop} />
                                </Grid2>
                                <Grid2 className='hero-inner-text'>Personalized Meal Plans</Grid2>
                                <Grid2 className='hero-inner-desc'>Tailored to your goals and preferences</Grid2>
                            </Grid2>
                        </Grid2>
                        <Grid2 item size={{ xs: 12, sm: 12, md: 3, lg: 3, xl: 3 }}>
                            <Grid2 className='hero-inner-card purple-hero-card'>
                                <Grid2 className='hero-inner-icon'>
                                    <img src={HCard3} />
                                </Grid2>
                                <Grid2 className='hero-inner-icon-absolute'>
                                    <img src={HCardTop} />
                                </Grid2>
                                <Grid2 className='hero-inner-text'>Personalized Meal Plans</Grid2>
                                <Grid2 className='hero-inner-desc'>Tailored to your goals and preferences</Grid2>
                            </Grid2>
                        </Grid2>
                        <Grid2 item size={{ xs: 12, sm: 12, md: 3, lg: 3, xl: 3 }}>
                            <Grid2 className='hero-inner-card orange-hero-card'>
                                <Grid2 className='hero-inner-icon'>
                                    <img src={HCard4} />
                                </Grid2>
                                <Grid2 className='hero-inner-icon-absolute'>
                                    <img src={HCardTop} />
                                </Grid2>
                                <Grid2 className='hero-inner-text'>Personalized Meal Plans</Grid2>
                                <Grid2 className='hero-inner-desc'>Tailored to your goals and preferences</Grid2>
                            </Grid2>
                        </Grid2>
                    </Grid2>
                </Grid2>
                <Grid2 item size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>
                    <Grid2 sx={{ overflow: 'hidden' }}>
                        <img src={NewHero} style={{ width: '100%', height: '100%' }} />
                    </Grid2>
                </Grid2>
            </Grid2>
            <Grid2 container sx={{ width: '100%', py: 4, zIndex: '5' }} columnSpacing={4} rowSpacing={2}>
                <Grid2 item size={{ xs: 12, sm: 12, md: 3, lg: 3, xl: 3 }}>
                    <Grid2 className='bottom-hero-card'>
                        <Grid2 className='bottom-hero-card-text'>5,000+</Grid2>
                        <Grid2 className='bottom-hero-card-desc'>Active Users</Grid2>
                        <Grid2 sx={{ position: 'absolute', right: '0px', bottom: '-5px' }}>
                            <img src={Triangle} width={'100%'} height={'100%'} />
                        </Grid2>
                    </Grid2>
                </Grid2>
                <Grid2 item size={{ xs: 12, sm: 12, md: 3, lg: 3, xl: 3 }}>
                    <Grid2 container className='bottom-hero-card'>
                        <Grid2 className='bottom-hero-card-text'>92%</Grid2>
                        <Grid2 className='bottom-hero-card-desc'>Success Rate</Grid2>
                        <Grid2 sx={{ position: 'absolute', right: '0px', bottom: '-5px' }}>
                            <img src={Triangle} width={'100%'} height={'100%'} />
                        </Grid2>
                    </Grid2>
                </Grid2>
                <Grid2 item size={{ xs: 12, sm: 12, md: 3, lg: 3, xl: 3 }}>
                    <Grid2 className='bottom-hero-card'>
                        <Grid2 className='bottom-hero-card-text'>15Kg</Grid2>
                        <Grid2 className='bottom-hero-card-desc'>Avg. Weight Loss</Grid2>
                        <Grid2 sx={{ position: 'absolute', right: '0px', bottom: '-5px' }}>
                            <img src={Triangle} width={'100%'} height={'100%'} />
                        </Grid2>
                    </Grid2>
                </Grid2>
                <Grid2 item size={{ xs: 12, sm: 12, md: 3, lg: 3, xl: 3 }}>
                    <Grid2 className='bottom-hero-card'>
                        <Grid2 className='bottom-hero-card-text'>24/7</Grid2>
                        <Grid2 className='bottom-hero-card-desc'>Support</Grid2>
                        <Grid2 sx={{ position: 'absolute', right: '0px', bottom: '-5px' }}>
                            <img src={Triangle} width={'100%'} height={'100%'} />
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default NewHeroSection