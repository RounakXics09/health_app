import { Box, Grid2 } from '@mui/material'
import React from 'react'

function Plan() {
  return (
    <Box>
      <Grid2 container className='div-center'>
        <Grid2 className='health-text'><span className='health-secondary-text'>Plans</span> That fit Your Fitness Journey</Grid2>
        <Grid2 sx={{ py: 4 }} className='health-description text-center width-50'>Choose a plan that suits your goals. Whether you're just starting or aiming for advanced results, we offer flexible options to support your fitness journey</Grid2>
      </Grid2>
      <Grid2>
        <Grid2 className="filled-button">Monthly</Grid2>
        <Grid2 className="outlined-button">Annual</Grid2>
      </Grid2>
      <Grid2 container>
        <Grid2 item size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>

        </Grid2>
        <Grid2 item size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>

        </Grid2>
        <Grid2 item size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>

        </Grid2>
      </Grid2>
    </Box>
  )
}

export default Plan