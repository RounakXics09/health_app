import { Box, Grid2 } from '@mui/material'
import React from 'react'
import AboutImage from '../assests/AboutImage.svg'

function AboutPlanner() {
    return (
        <Box>
            <Grid2 container rowSpacing={5} columnSpacing={5}>
                <Grid2 className='div-center display-sm-none' size={{ sm: 12, md: 5, lg: 5, xl: 5 }} >
                    <img src={AboutImage} />
                </Grid2>
                <Grid2 className='d-flex-col' sx={{ pl: { xs: 2, md: 4, lg: 4 }, pr: { xs: 2, md: 8, lg: 8 }, py: 8 }} size={{ sm: 12, md: 7, lg: 7, xl: 7 }}>
                    <Grid2 className='about-planner-heading'>Welcome to <span>DietBot,</span> your AI-powered <span>Diet Planner</span> on WhatsApp!</Grid2>
                    <Grid2 className='about-planner-description'>We help you create meal plans, track nutrition, and stay on top of your health goals—all through simple chat. Whether you're looking to lose weight, gain muscle, or just eat better, DietBot is here to guide you.</Grid2>
                    <Grid2 className='about-planner-description'>No complicated apps, no guesswork—just smart, personalized diet plans at your fingertips. Start your journey today! 🚀🥗</Grid2>
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default AboutPlanner