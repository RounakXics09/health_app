import { Box, Grid2 } from '@mui/material'
import React from 'react'

function SmartChoice() {
  return (
    <Box>
      <Grid2 container>
        <Grid2 item size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
          <Grid2 className='health-text'>The <span className='health-secondary-text'>
            Smarter Choice </span> for Health & Fitness</Grid2>
          <Grid2 sx={{py:4}} className='health-description width-60'>Reach your fitness goals with personalized plans
          and easy tracking, all in one simple platform</Grid2>
        </Grid2>
        <Grid2 item size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>

        </Grid2>
      </Grid2>
    </Box>
  )
}

export default SmartChoice