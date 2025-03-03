import { Box, Grid2 } from '@mui/material'
import React from 'react'

function Goals() {
  return (
    <Box>
      <Grid2 container>
        <Grid2 item size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
          <Grid2>
            Achieve Your Fitness Goals with Ease
          </Grid2>
          <Grid2>
            Join thousands of fitness enthusiasts on our platform and transform your health. Available on iOS and Android.
          </Grid2>
        </Grid2>
        <Grid2 item size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>

        </Grid2>
      </Grid2>
    </Box>
  )
}

export default Goals