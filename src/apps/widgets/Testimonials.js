import { Box, Grid2 } from '@mui/material'
import React from 'react'

function Testimonials() {
  return (
    <Box className='testimonial-container width-100'>
      <Grid2 container columnSpacing={4}>
        <Grid2 item size={{ xs: 12, sm: 12, md: 3, lg: 3, xl: 3 }}>
          <Grid2 className='test-normal-text'>Workouts Completed</Grid2>
          <Grid2 className='test-big-text'>10,000+</Grid2>
          <Grid2 className='test-small-text'>Helping users reach their fitness goals faster with over 10.000 completed workouts in our platform.</Grid2>
        </Grid2>
        <Grid2 item size={{ xs: 12, sm: 12, md: 3, lg: 3, xl: 3 }}>
          <Grid2 className='test-normal-text'>Users Satisfaction</Grid2>
          <Grid2 className='test-big-text'>85%</Grid2>
          <Grid2 className='test-small-text'>85% of our users report increased motivation and better fitness tracking since joining the platform.</Grid2>
        </Grid2>
        <Grid2 item size={{ xs: 12, sm: 12, md: 3, lg: 3, xl: 3 }}>
          <Grid2 className='test-normal-text'>Users Tracked</Grid2>
          <Grid2 className='test-big-text'>5,000+</Grid2>
          <Grid2 className='test-small-text'>Join 5,000+ active users tracking their daily fitness, nutrition, and progress with ease.</Grid2>
        </Grid2>
        <Grid2 item size={{ xs: 12, sm: 12, md: 3, lg: 3, xl: 3 }}>
          <Grid2 className='test-normal-text'>Trainers Registered</Grid2>
          <Grid2 className='test-big-text'>200+</Grid2>
          <Grid2 className='test-small-text'>Connect with 200+ certified trainers available to guide you through custom workout programs.</Grid2>
        </Grid2>
      </Grid2>
    </Box>
  )
}

export default Testimonials