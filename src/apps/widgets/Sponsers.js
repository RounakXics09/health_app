import { Box, Grid2 } from '@mui/material'
import React from 'react'
import SponserLogo1 from '../assests/graylog.svg'
import SponserLogo2 from '../assests/segment.svg'
import SponserLogo3 from '../assests/mastodon.svg'
import SponserLogo4 from '../assests/spree.svg'
import SponserLogo5 from '../assests/tnw.svg'
import SponserLogo6 from '../assests/helpscout.svg'

function Sponsers() {
  return (
    <Box sx={{py:4}}>
      <Grid2 container rowSpacing={2}>
        <Grid2 item size={{ xs: 12, sm: 12, md: 2, lg: 2, xl: 2 }}>
          <div className='div-center' style={{padding:'0px 20px'}}>
            <img src={SponserLogo1} height={'40px'} width={'100%'} />
          </div>
        </Grid2>
        <Grid2 item size={{ xs: 12, sm: 12, md: 2, lg: 2, xl: 2 }}>
          <div className='div-center' style={{padding:'0px 20px'}}>
            <img src={SponserLogo2} height={'40px'} width={'100%'} />
          </div>
        </Grid2>
        <Grid2 item size={{ xs: 12, sm: 12, md: 2, lg: 2, xl: 2 }}>
          <div className='div-center' style={{padding:'0px 20px'}}>
            <img src={SponserLogo3} height={'40px'} width={'100%'} />
          </div>
        </Grid2>
        <Grid2 item size={{ xs: 12, sm: 12, md: 2, lg: 2, xl: 2 }}>
          <div className='div-center' style={{padding:'0px 20px'}}>
            <img src={SponserLogo4} height={'40px'} width={'100%'} />
          </div>
        </Grid2>
        <Grid2 item size={{ xs: 12, sm: 12, md: 2, lg: 2, xl: 2 }}>
          <div className='div-center' style={{padding:'0px 20px'}}>
            <img src={SponserLogo5} height={'40px'} width={'100%'} />
          </div>
        </Grid2>
        <Grid2 item size={{ xs: 12, sm: 12, md: 2, lg: 2, xl: 2 }}>
          <div className='div-center' style={{padding:'0px 20px'}}>
            <img src={SponserLogo6} height={'40px'} width={'100%'} />
          </div>
        </Grid2>
      </Grid2>
    </Box>
  )
}

export default Sponsers