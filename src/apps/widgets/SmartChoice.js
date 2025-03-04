import { Box, Grid2 } from '@mui/material'
import React from 'react'
import Byceps from '../assests/hero3.png'

function SmartChoice() {
  return (
    <Box sx={{py:5}}>
      <Grid2 container columnSpacing={4} rowSpacing={4}>
        <Grid2 item size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }} sx={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
          <Grid2 className='health-text'>The <span className='health-secondary-text'>
            Smarter Choice </span> for Health & Fitness</Grid2>
          <Grid2 sx={{ py: 4 }} className='health-description width-80'>Reach your fitness goals with personalized plans
            and easy tracking, all in one simple platform</Grid2>
        </Grid2>
        <Grid2 item size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
          <Grid2 container columnSpacing={3} rowSpacing={3}>
            <Grid2 item size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
              <Grid2 className='choice-card-container'>
                <Grid2>
                  <img src={Byceps} width={'75px'} height={'75px'} />
                </Grid2>
                <Grid2 className='choice-heading'>All-in-One Fitness Solution</Grid2>
                <Grid2 className='choice-description'>Track your workouts, meals, and progress all in on app.</Grid2>
              </Grid2>
            </Grid2>
            <Grid2 item size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
              <Grid2 className='choice-card-container'>
                <Grid2>
                  <img src={Byceps} width={'75px'} height={'75px'} />
                </Grid2>
                <Grid2 className='choice-heading'>Personalized Experience</Grid2>
                <Grid2 className='choice-description'>Tailor workout plans and goals to your fitness level.</Grid2>
              </Grid2>
            </Grid2>
            <Grid2 item size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
              <Grid2 className='choice-card-container'>
                <Grid2>
                  <img src={Byceps} width={'75px'} height={'75px'} />
                </Grid2>
                <Grid2 className='choice-heading'>Real-Time Progress Updates</Grid2>
                <Grid2 className='choice-description'>See live updates on calories, steps, and body composition.</Grid2>
              </Grid2>
            </Grid2>
            <Grid2 item size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
              <Grid2 className='choice-card-container'>
                <Grid2>
                  <img src={Byceps} width={'75px'} height={'75px'} />
                </Grid2>
                <Grid2 className='choice-heading'>Expert Support</Grid2>
                <Grid2 className='choice-description'>Access guidance from certified trainers for workouts and nutrition.</Grid2>
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  )
}

export default SmartChoice