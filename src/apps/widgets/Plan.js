import { Box, Grid2 } from '@mui/material'
import React from 'react'

function Plan() {
  return (
    <Box>
      <Grid2 container className='div-center'>
        <Grid2 className='health-text'><span className='health-secondary-text'>Plans</span> That fit Your Fitness Journey</Grid2>
        <Grid2 sx={{ py: 4 }} className='health-description text-center width-50 width-100-sm'>Choose a plan that suits your goals. Whether you're just starting or aiming for advanced results, we offer flexible options to support your fitness journey</Grid2>
      </Grid2>
      <Grid2 className='div-center'>
        <Grid2 className="filled-button">Monthly</Grid2>
        <Grid2 className="outlined-button">Annual</Grid2>
      </Grid2>
      <Grid2 container columnSpacing={2} rowSpacing={2}>
        <Grid2 item size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }} className='plans-card-container'>
          <Grid2 sx={{p:3}}>
            <Grid2 className='plan-text'>Basic</Grid2>
            <Grid2 className='plan-price'>$29<span>/month</span></Grid2>
            <Grid2 className='plan-description'>Ideal for individuals looking to manage personal fitness goals</Grid2>
            <Grid2 className='plan-button'>Get Started</Grid2>
            <Grid2 className='plan-detail-container'>
              <Grid2 className='plan-detail'>✓ 5 workout programs</Grid2>
              <Grid2 className='plan-detail'>✓ Daily meal tracking</Grid2>
              <Grid2 className='plan-detail'>✓ Progress analytics</Grid2>
              <Grid2 className='plan-detail'>✓ Community access</Grid2>
              <Grid2 className='plan-detail'>✓ Access to basic workout tutorials</Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2 item size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }} className='plans-card-container'>
        <Grid2 sx={{p:3}}>
            <Grid2 className='plan-text'>Basic</Grid2>
            <Grid2 className='plan-price'>$29<span>/month</span></Grid2>
            <Grid2 className='plan-description'>Ideal for individuals looking to manage personal fitness goals</Grid2>
            <Grid2 className='plan-button'>Get Started</Grid2>
            <Grid2 className='plan-detail-container'>
              <Grid2 className='plan-detail'>✓ 5 workout programs</Grid2>
              <Grid2 className='plan-detail'>✓ Daily meal tracking</Grid2>
              <Grid2 className='plan-detail'>✓ Progress analytics</Grid2>
              <Grid2 className='plan-detail'>✓ Community access</Grid2>
              <Grid2 className='plan-detail'>✓ Access to basic workout tutorials</Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2 item size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }} className='plans-card-container'>
        <Grid2 sx={{p:3}}>
            <Grid2 className='plan-text'>Basic</Grid2>
            <Grid2 className='plan-price'>$29<span>/month</span></Grid2>
            <Grid2 className='plan-description'>Ideal for individuals looking to manage personal fitness goals</Grid2>
            <Grid2 className='plan-button'>Get Started</Grid2>
            <Grid2 className='plan-detail-container'>
              <Grid2 className='plan-detail'>✓ 5 workout programs</Grid2>
              <Grid2 className='plan-detail'>✓ Daily meal tracking</Grid2>
              <Grid2 className='plan-detail'>✓ Progress analytics</Grid2>
              <Grid2 className='plan-detail'>✓ Community access</Grid2>
              <Grid2 className='plan-detail'>✓ Access to basic workout tutorials</Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  )
}

export default Plan