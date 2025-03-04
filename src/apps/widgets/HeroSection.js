import { Box, Grid2 } from '@mui/material'
import React from 'react'
import Hero1 from '../assests/hero1.png'
import Hero2 from '../assests/hero2.png'
import Hero3 from '../assests/hero3.png'
import Hero4 from '../assests/hero4.png'

function HeroSection() {
    return (
        <Box className='div-center hero-section-container d-flex-col position-relative'>
            <Grid2 className='health-heading-text position-relative width-100'>
                <div style={{ top: '-30px', left: '20px', position: 'absolute' }} >
                    <img src={Hero1} height={'45px'} width={'45px'} />
                </div>
                <span>Your Health, </span>
                <span className='health-heading-secondary-text'>Simplified</span>
                <div style={{ bottom: '-50px', right: '10px', position: 'absolute' }} >
                    <img src={Hero2} height={'93px'} width={'93px'} />
                </div>
            </Grid2>
            <Grid2 sx={{py:3}} className='health-description text-center'>Track your workouts, meals, and progress with our intuitive dashboard. <br />Stay motivated and reach your fitness goals faster</Grid2>
            <Grid2 className='div-center position-relative width-100'>
                <div style={{ top: '-50px', left: '50px', position: 'absolute' }} >
                    <img src={Hero3} height={'93px'} width={'93px'} />
                </div>
                <Grid2 className="filled-button">Book a Demo</Grid2>
                <Grid2 className="outlined-button">Contact Sales</Grid2>
                <div style={{ bottom: '0px', right: '80px', position: 'absolute' }} >
                    <img src={Hero4} height={'73px'} width={'73px'} />
                </div>
            </Grid2>
        </Box>
    )
}

export default HeroSection