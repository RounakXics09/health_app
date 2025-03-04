import { Box, Grid2 } from '@mui/material'
import React from 'react'
import RealImage from '../assests/RealImage.png'

function RealResults() {
  return (
    <Box>
      <Grid2 container className='div-center'>
        <Grid2 className='health-text'>Real <span className='health-secondary-text'>Results</span> From Real <span className='health-secondary-text'>Users</span> </Grid2>
        <Grid2 sx={{ py: 4 }} className='health-description text-center width-50'>Hear from our fitness community about how our platform has helped them transform their health and fitness journey</Grid2>
      </Grid2>
      <Grid2 container columnSpacing={4}>
        <Grid2 item size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }} className='real-card-container'>
          <Grid2>
            <Grid2 className='real-results-text'>This platform has transformed my fitness routine! It's so easy to track progress and schedule workouts. I've never been more motivated..</Grid2>
            <Grid2 sx={{display:'flex',alignItems:'center',py:3}}>
              <Grid2>
                <img src={RealImage} width={'46px'} height={'46px'} />
              </Grid2>
              <Grid2 sx={{px:2}}>
                <Grid2 className='real-results-name'>Autumn Phillips</Grid2>
                <Grid2 className='real-results-id'>@Sarah_fit</Grid2>
              </Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2 item size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}></Grid2>
        <Grid2 item size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}></Grid2>
      </Grid2>
    </Box>
  )
}

export default RealResults