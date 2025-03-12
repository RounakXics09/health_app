import { Box, Grid2 } from '@mui/material'
import React from 'react'
import AboutBotIcon from '../assests/AboutBot.png'

function AboutBot() {
    return (
        <Box className="about-bot-container">
            <Grid2 className='about-bot-heading'>
                "DietBot made healthy eating so easy! I get meal plans tailored to my goals without any hassle."
            </Grid2>
            <Grid2 sx={{py:4}}>
                <img src={AboutBotIcon} width={'64px'} height={'64px'} />
            </Grid2>
            <Grid2 className='about-bot-name'>
                Priya S.
            </Grid2>
            <Grid2 className='about-bot-college'>
                Student, National University
            </Grid2>
        </Box>
    )
}

export default AboutBot