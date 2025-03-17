import { Box, Grid2 } from '@mui/material'
import React from 'react'
import AboutBackground from '../assests/AboutBackground.svg'
import AboutPlanner from '../widgets/AboutPlanner'
import OurTeam from '../widgets/OurTeam'
import Testimonials from '../widgets/Testimonials'
import Plan from '../widgets/Plan'
import Faq from '../widgets/Faq'
import NewsLetter from '../widgets/NewsLetter'
import AboutBot from '../widgets/AboutBot'

function AboutUs() {
  return (
    <Box sx={{ width: '100%', pt: '85px' }}>
      <Grid2 sx={{ position: 'relative' }}>
        <Grid2 className='div-center' sx={{ position: { xs: 'relative', md: 'absolute', lg: 'absolute' }, width: '100%', height: '100%' }}>
          <Grid2 className='div-center d-flex-col width-100'>
            <Grid2 className='about-heading'>About Us</Grid2>
            <Grid2 className='about-description'>Looking for personalized diet plans or have questions about nutrition? We’re here to help! Get in touch with us for expert guidance on your health journey</Grid2>
          </Grid2>
        </Grid2>
        <Grid2 className='display-sm-none'>
          <img src={AboutBackground} width={'100%'} />
        </Grid2>
      </Grid2>
      <Grid2 sx={{ py: { xs: 2, md: 8, lg: 8 }, px: { xs: 4, md: 8, lg: 8 } }}>
        <AboutPlanner />
      </Grid2>
      <Grid2 sx={{ px: { xs: 2, md: 4, lg: 4 } }}>
        <OurTeam />
      </Grid2>
      <Grid2 sx={{ px: 4, py: 5 }}>
        <Testimonials />
      </Grid2>
      <Grid2 sx={{ px: 4, py: 5 }}>
        <Plan />
      </Grid2>
      <Grid2 sx={{ px: 4, py: 5 }}>
        <AboutBot />
      </Grid2>
      <Grid2 sx={{ px: 4, py: 5 }}>
        <Faq />
      </Grid2>
      <Grid2 sx={{ px: 4, py: 5 }}>
        <NewsLetter />
      </Grid2>
    </Box>
  )
}

export default AboutUs