import { Box, Card, Grid2 } from '@mui/material'
import React from 'react'
import Fitness from '../assests/Fitness.png'
function Goals() {
  return (
    <Box sx={{py:4}}>
      <Card sx={{ boxShadow: '0px 0px 26.1px 0px #0000001A', p: 5, borderRadius: '14px' }}>
        <Grid2 container columnSpacing={5} rowSpacing={4}>
          <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
            <Grid2 className='health-text'>
              Achieve Your <span className='health-secondary-text'>Fitness Goals</span> with Ease
            </Grid2>
            <Grid2 sx={{ py: 4 }} className='health-description'>
              Join thousands of fitness enthusiasts on our platform and transform your health. Available on iOS and Android.
            </Grid2>
            <Grid2 sx={{ display: 'flex' }}>
              <Grid2 className="filled-button">Start Your Journey</Grid2>
            </Grid2>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }} className='div-center'>
            <Grid2 sx={{ px: 2 }}>
              <img src={Fitness} width={'100%'} height={'100%'} />
            </Grid2>
          </Grid2>
        </Grid2>
      </Card>
    </Box>
  )
}

export default Goals