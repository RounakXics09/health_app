import { Box, Grid2 } from '@mui/material'
import React from 'react'

function PhotoSection() {
  return (
    <Box>
      <Grid2 container>
        <Grid2 item size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>

        </Grid2>
        <Grid2 item size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
          <Grid2 item size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>

          </Grid2>
          <Grid2 item size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>

          </Grid2>

        </Grid2>
      </Grid2>
    </Box>
  )
}

export default PhotoSection