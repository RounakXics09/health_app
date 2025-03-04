import { Box, Grid2 } from '@mui/material'
import React from 'react'
import SmartChoice from '../assests/SmartChoice.svg'

function SmartChoiceFitness() {
  return (
    <Box sx={{py:8}}>
      <Grid2 container columnSpacing={8} rowSpacing={5}>
        <Grid2 item size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }} sx={{display:'flex',justifyContent:'center',flexDirection:'column'}}>
          <Grid2 sx={{ py: 4 }} className='health-text'>The <span className='health-secondary-text'>Smarter Choice</span> for Health & Fitness</Grid2>
          <Grid2 sx={{ py: 4 }} className='health-description'>Manage your workouts, track your progress, and share insights with trainers and friends-all in one place. Enjoy real-time updates and detailed analytics for an optimized fitness journey.</Grid2>
          <Grid2 className='smart-choice-links'>Widgets Customization</Grid2>
          <Grid2 className='smart-choice-links'>Real-Time Data Sync</Grid2>
          <Grid2 className='smart-choice-links'>Collaborative Scheduling</Grid2>
        </Grid2>
        <Grid2 item size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
          <Grid2>
            <img src={SmartChoice} width={'100%'} height={'100%'} />
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  )
}

export default SmartChoiceFitness