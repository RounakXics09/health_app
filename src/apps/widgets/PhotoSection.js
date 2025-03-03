import { Box, Grid2 } from '@mui/material'
import React from 'react'
import Bottom1 from '../assests/Bottom1.svg'
import Bottom2 from '../assests/Bottom2.svg'
import Bottom3 from '../assests/Bottom3.svg'

function PhotoSection() {
  return (
    <Box>
      <Grid2 container columnSpacing={4}>
        <Grid2 item size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
          <div>
            <img src={Bottom1} height={'100%'} width={'100%'} />
          </div>
        </Grid2>
        <Grid2 item size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }}>
          <Grid2 container rowSpacing={4}>
            <Grid2 item size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
              <div>
                <img src={Bottom2} height={'100%'} width={'100%'} />
              </div>
            </Grid2>
            <Grid2 item size={{ xs: 12, sm: 12, md: 12, lg: 12, xl: 12 }}>
              <div>
                <img src={Bottom3} height={'100%'} width={'100%'} />
              </div>
            </Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  )
}

export default PhotoSection