import React from 'react'
import HeroSection from '../widgets/HeroSection'
import PhotoSection from '../widgets/PhotoSection'
import Sponsers from '../widgets/Sponsers'
import Testimonials from '../widgets/Testimonials'
import SmartChoice from '../widgets/SmartChoice'
import Tools from '../widgets/Tools'
import SmartChoiceFitness from '../widgets/SmartChoiceFitness'
import RealResults from '../widgets/RealResults'
import Plan from '../widgets/Plan'
import Faq from '../widgets/Faq'
import Goals from '../widgets/Goals'
import { Box, Grid2 } from '@mui/material'
import NewHeroSection from '../widgets/NewHeroSection'
import BackLeft from '../assests/BackLeft.png'
import BackRight from '../assests/BackRight.png'
import BackBottom from '../assests/BackBottom.png'

function MainPage() {
  return (
    <Box sx={{ width: '100%' }}>
      <Grid2 container rowSpacing={4}>
        {/* <Grid2 size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
          <HeroSection />
        </Grid2> */}
        {/* old hero page */}
        <Grid2 sx={{ px: { xs: 2, sm: 2, md: 4, lg: 8, xl: 8 },pt:8,position:'relative' }} size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
        <Grid2 sx={{position:'absolute',top:'0px',left:'0px'}}><img src={BackLeft} /></Grid2>
        <Grid2 sx={{position:'absolute',right:'0px',top:'120px'}}><img src={BackRight} /></Grid2>
          <NewHeroSection />
        </Grid2>
        <Grid2 sx={{position:'absolute',left:'0px',bottom:'-200px',zIndex:'1'}}><img src={BackBottom} /></Grid2>
        <Grid2 sx={{ px: { xs: 2, sm: 2, md: 4, lg: 8, xl: 8 }, py: 2 }} size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
          <PhotoSection />
        </Grid2>
        <Grid2 sx={{ px: { xs: 2, sm: 2, md: 4, lg: 8, xl: 8 }, py: 2 }} size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
          <Sponsers />
        </Grid2>
        <Grid2 sx={{ px: { xs: 2, sm: 2, md: 4, lg: 8, xl: 8 }, py: 2 }} size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
          <Testimonials />
        </Grid2>
        <Grid2 sx={{ px: { xs: 2, sm: 2, md: 4, lg: 8, xl: 8 }, py: 2 }} size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
          <SmartChoice />
        </Grid2>
        <Grid2 sx={{ px: { xs: 2, sm: 2, md: 4, lg: 8, xl: 8 }, py: 2 }} size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
          <Tools />
        </Grid2>
        <Grid2 sx={{ px: { xs: 2, sm: 2, md: 4, lg: 8, xl: 8 }, py: 2 }} size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
          <SmartChoiceFitness />
        </Grid2>
        <Grid2 sx={{ px: { xs: 2, sm: 2, md: 4, lg: 8, xl: 8 }, py: 2 }} size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
          <RealResults />
        </Grid2>
        <Grid2 sx={{ px: { xs: 2, sm: 2, md: 4, lg: 8, xl: 8 }, py: 2 }} size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
          <Plan />
        </Grid2>
        <Grid2 sx={{ px: { xs: 2, sm: 2, md: 4, lg: 8, xl: 8 }, py: 2 }} size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
          <Faq />
        </Grid2>
        <Grid2 sx={{ px: { xs: 2, sm: 2, md: 4, lg: 8, xl: 8 }, py: 2 }} size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
          <Goals />
        </Grid2>
      </Grid2>
    </Box>
  )
}

export default MainPage