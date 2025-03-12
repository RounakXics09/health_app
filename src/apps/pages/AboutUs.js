import { Box, Grid2 } from '@mui/material'
import React from 'react'
import AboutBackground from '../assests/AboutBackground.svg'

function AboutUs() {
  return (
    <Box>
      <Grid2 sx={{ position: 'relative' }}>
        <Grid2 sx={{ position: 'absolute',zIndex:-1 }}>
          <img src={AboutBackground} width={'100%'} sx={{zIndex:0}} />
        </Grid2>
        <Grid2 sx={{zIndex:1}}>About Us</Grid2>
        <Grid2 sx={{zIndex:1}}>Looking for personalized diet plans or have questions about nutrition? We’re here to help! Get in touch with us for expert guidance on your health journey</Grid2>
      </Grid2>
    </Box>
  )
}

export default AboutUs