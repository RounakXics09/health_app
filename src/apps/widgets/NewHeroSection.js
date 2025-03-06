import { Box, Grid2 } from '@mui/material'
import { motion } from 'framer-motion';
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

const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

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
                    <motion.div initial='hidden' animate='visible' variants={slideInLeft} className='top-ai-text'>
                        <div className='green-circle'></div>
                        AI-Powered Nutrition
                    </motion.div>
                    <Grid2 sx={{ position: 'relative' }}>
                        <motion.div initial='hidden' animate='visible' variants={fadeIn} className='new-hero-heading'>
                            Your Personal
                            <motion.span
                                // animate={{
                                //     color: ["#008A47", "#24CC63", "#008A47"],
                                // }}
                                // transition={{
                                //     duration: 1,
                                //     repeat: Infinity,
                                //     ease: "easeInOut",
                                // }}
                                animate={{
                                    color: ["#008A47", "#24CC63", "##58DE8B", "#008A47"], // Red → Green → Blue → Red
                                    opacity: [1, 0.5, 1], // Fades in and out
                                }}
                                transition={{
                                    duration: 1, // Total animation time
                                    repeat: Infinity, // Loops forever
                                    ease: "easeInOut",
                                }}
                            > Diet Coach </motion.span>
                            on WhatsApp
                        </motion.div>
                        <Grid2 className='display-sm-none' sx={{ position: 'absolute', right: '0px', top: '0px', zIndex: '1' }}>
                            <motion.img initial='hidden' animate='visible' variants={slideInLeft} src={RunIcon} />
                        </Grid2>
                    </Grid2>
                    <Grid2 sx={{ display: 'flex', position: 'relative' }}>
                        <Grid2>
                            <motion.div initial='hidden' animate='visible' variants={fadeIn} className='new-hero-desc'>
                                Get personalized meal plans, nutrition advice, and diet tracking
                            </motion.div>
                            <motion.div initial='hidden' animate='visible' variants={fadeIn} className='new-hero-desc-name'>
                                —all through WhatsApp. Powered by AI.
                            </motion.div>
                            <motion.div initial='hidden' animate='visible' variants={fadeIn} className='position-relative width-100 d-flex-col-sm' style={{ display: 'flex', alignItems: 'center', paddingTop: '16px' }}>
                                <motion.div whileHover={{ scale: 1.05 }} className="filled-button-linear">
                                    Book a Demo <KeyboardArrowRightIcon fontSize='small' sx={{ paddingLeft: '20px' }} />
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.05 }} className="outlined-button-linear">
                                    Contact Sales
                                </motion.div>
                            </motion.div>
                        </Grid2>
                        <Grid2 className='display-sm-none'>
                            <Grid2 sx={{ position: 'absolute', right: '-50px', overflow: 'hidden' }}>
                                <motion.img initial='hidden' animate='visible' variants={slideInRight} src={HeroCentericon} />
                            </Grid2>
                        </Grid2>
                    </Grid2>
                    <Grid2 container sx={{ py: 3, width: { xs: '100%', sm: '100%', md: '80%', lg: '80%', xl: '80%' }, zIndex: '4' }} rowSpacing={2} columnSpacing={2}>
                        <Grid2 item size={{ xs: 12, sm: 12, md: 3, lg: 3, xl: 3 }}>
                            <motion.div initial='hidden' animate='visible' variants={fadeIn} whileHover={{ y: -10, transition: { duration: 0.2 } }} className='hero-inner-card green-hero-card'>
                                <Grid2 className='hero-inner-icon'>
                                    <img src={HCard1} />
                                </Grid2>
                                <Grid2 className='hero-inner-icon-absolute'>
                                    <img src={HCardTop} />
                                </Grid2>
                                <Grid2 className='hero-inner-text'>Personalized Meal Plans</Grid2>
                                <Grid2 className='hero-inner-desc'>Tailored to your goals and preferences</Grid2>
                            </motion.div>
                        </Grid2>
                        <Grid2 item size={{ xs: 12, sm: 12, md: 3, lg: 3, xl: 3 }}>
                            <motion.div initial='hidden' animate='visible' variants={fadeIn} whileHover={{ y: -10, transition: { duration: 0.2 } }} className='hero-inner-card blue-hero-card'>
                                <Grid2 className='hero-inner-icon'>
                                    <img src={HCard2} />
                                </Grid2>
                                <Grid2 className='hero-inner-icon-absolute'>
                                    <img src={HCardTop} />
                                </Grid2>
                                <Grid2 className='hero-inner-text'>WhatsApp Integration</Grid2>
                                <Grid2 className='hero-inner-desc'>Chat with your coach anytime, anywhere</Grid2>
                            </motion.div>
                        </Grid2>
                        <Grid2 item size={{ xs: 12, sm: 12, md: 3, lg: 3, xl: 3 }}>
                            <motion.div initial='hidden' animate='visible' variants={fadeIn} whileHover={{ y: -10, transition: { duration: 0.2 } }} className='hero-inner-card purple-hero-card'>
                                <Grid2 className='hero-inner-icon'>
                                    <img src={HCard3} />
                                </Grid2>
                                <Grid2 className='hero-inner-icon-absolute'>
                                    <img src={HCardTop} />
                                </Grid2>
                                <Grid2 className='hero-inner-text'>Personalized Meal Plans</Grid2>
                                <Grid2 className='hero-inner-desc'>Tailored to your goals and preferences</Grid2>
                            </motion.div>
                        </Grid2>
                        <Grid2 item size={{ xs: 12, sm: 12, md: 3, lg: 3, xl: 3 }}>
                            <motion.div initial='hidden' animate='visible' variants={fadeIn} whileHover={{ y: -10, transition: { duration: 0.2 } }} className='hero-inner-card orange-hero-card'>
                                <Grid2 className='hero-inner-icon'>
                                    <img src={HCard4} />
                                </Grid2>
                                <Grid2 className='hero-inner-icon-absolute'>
                                    <img src={HCardTop} />
                                </Grid2>
                                <Grid2 className='hero-inner-text'>Personalized Meal Plans</Grid2>
                                <Grid2 className='hero-inner-desc'>Tailored to your goals and preferences</Grid2>
                            </motion.div>
                        </Grid2>
                    </Grid2>
                </Grid2>
                <Grid2 item size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>
                    <Grid2 sx={{ overflow: 'hidden' }}>
                        <motion.img initial='hidden' animate='visible' variants={slideInRight} src={NewHero} style={{ width: '100%', height: '100%' }} />
                    </Grid2>
                </Grid2>
            </Grid2>
            <Grid2 container sx={{ width: '100%', py: 4, zIndex: '5' }} columnSpacing={4} rowSpacing={2}>
                <Grid2 item size={{ xs: 12, sm: 12, md: 3, lg: 3, xl: 3 }}>
                    <Grid2 className='bottom-hero-card'>
                        <motion.div initial='hidden' animate='visible' variants={fadeIn} whileHover={{ y: -10, transition: { duration: 0.2 } }} className='bottom-hero-card-text'>5,000+</motion.div>
                        <motion.div initial='hidden' animate='visible' variants={fadeIn} whileHover={{ y: -10, transition: { duration: 0.2 } }} className='bottom-hero-card-desc'>Active Users</motion.div>
                        <Grid2 sx={{ position: 'absolute', right: '0px', bottom: '-5px' }}>
                            <img src={Triangle} width={'100%'} height={'100%'} />
                        </Grid2>
                    </Grid2>
                </Grid2>
                <Grid2 item size={{ xs: 12, sm: 12, md: 3, lg: 3, xl: 3 }}>
                    <Grid2 className='bottom-hero-card'>
                        <motion.div initial='hidden' animate='visible' variants={fadeIn} whileHover={{ y: -10, transition: { duration: 0.2 } }} className='bottom-hero-card-text'>92%</motion.div>
                        <motion.div initial='hidden' animate='visible' variants={fadeIn} whileHover={{ y: -10, transition: { duration: 0.2 } }} className='bottom-hero-card-desc'>Success Rate</motion.div>
                        <Grid2 sx={{ position: 'absolute', right: '0px', bottom: '-5px' }}>
                            <img src={Triangle} width={'100%'} height={'100%'} />
                        </Grid2>
                    </Grid2>
                </Grid2>
                <Grid2 item size={{ xs: 12, sm: 12, md: 3, lg: 3, xl: 3 }}>
                    <Grid2 className='bottom-hero-card'>
                        <motion.div initial='hidden' animate='visible' variants={fadeIn} whileHover={{ y: -10, transition: { duration: 0.2 } }} className='bottom-hero-card-text'>15Kg</motion.div>
                        <motion.div initial='hidden' animate='visible' variants={fadeIn} whileHover={{ y: -10, transition: { duration: 0.2 } }} className='bottom-hero-card-desc'>Avg. Weight Loss</motion.div>
                        <Grid2 sx={{ position: 'absolute', right: '0px', bottom: '-5px' }}>
                            <img src={Triangle} width={'100%'} height={'100%'} />
                        </Grid2>
                    </Grid2>
                </Grid2>
                <Grid2 item size={{ xs: 12, sm: 12, md: 3, lg: 3, xl: 3 }}>
                    <Grid2 className='bottom-hero-card'>
                        <motion.div initial='hidden' animate='visible' variants={fadeIn} whileHover={{ y: -10, transition: { duration: 0.2 } }} className='bottom-hero-card-text'>24/7</motion.div>
                        <motion.div initial='hidden' animate='visible' variants={fadeIn} whileHover={{ y: -10, transition: { duration: 0.2 } }} className='bottom-hero-card-desc'>Support</motion.div>
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