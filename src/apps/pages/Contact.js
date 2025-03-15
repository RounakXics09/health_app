import { Box, Grid2 } from '@mui/material'
import React from 'react'
import ContactImage from '../assests/ContactImage.svg'
import Phone from '../assests/Phone.png'
import Envelope from '../assests/Envelope.png'
import MapPin from '../assests/MapPin.png'
import Contact1 from '../assests/Contact1.png'
import Contact2 from '../assests/Contact2.png'
import Contact3 from '../assests/Contact3.png'
import RunIcon from '../assests/RunIcon.png'
import NewsLetter from '../widgets/NewsLetter'

function Contact() {
  return (
    <Box className='contact-container'>
      <Grid2 className='contact-container-inner'>
        <Grid2 sx={{position:'absolute',left:'50px',bottom:'0px'}}>
          <img src={Contact1} width={'100px'} height={'100px'} />
        </Grid2>
        <Grid2 sx={{position:'absolute',top:'-10px',left:'20%',zIndex:-1}}>
          <img src={Contact2} width={'83px'} height={'83px'} />
        </Grid2>
        <Grid2 sx={{position:'absolute',bottom:'-10px',right:'18%',zIndex:-1}}>
          <img src={RunIcon} width={'83px'} height={'83px'} />
        </Grid2>
        <Grid2 sx={{position:'absolute',right:'50px',top:'10px'}}>
          <img src={Contact3} width={'92px'} height={'92px'} />
        </Grid2>
        <Grid2 className='contact-heading'>Contact Us</Grid2>
        <Grid2 className='contact-description'>Looking for personalized diet plans or have questions about nutrition? We’re here to help! Get in touch with us for expert guidance on your health journey</Grid2>
      </Grid2>

      <Grid2 container sx={{ px: 15, py: 5 }} columnSpacing={5} rowSpacing={4}>
        <Grid2 size={{ xs: 4, md: 4, lg: 4, xl: 4 }}>
          <Grid2 className='contact-cards'>
            <Grid2><img src={Phone} width={'46px'} height={'46px'} /></Grid2>
            <Grid2>Phone:</Grid2>
            <Grid2>+1 234 567 8901</Grid2>
          </Grid2>
        </Grid2>
        <Grid2 size={{ xs: 4, md: 4, lg: 4, xl: 4 }}>
          <Grid2 className='contact-cards'>
            <Grid2><img src={Envelope} width={'46px'} height={'46px'} /></Grid2>
            <Grid2>Email:</Grid2>
            <Grid2>contact@fitdummy.com</Grid2>
          </Grid2>
        </Grid2>
        <Grid2 size={{ xs: 4, md: 4, lg: 4, xl: 4 }}>
          <Grid2 className='contact-cards'>
            <Grid2><img src={MapPin} width={'46px'} height={'46px'} /></Grid2>
            <Grid2>Address:</Grid2>
            <Grid2>1234 Fit Street, Muscle City, FC 56789</Grid2>
          </Grid2>
        </Grid2>
      </Grid2>

      <Grid2 container sx={{ px: 4, py: 5 }}>
        <Grid2 size={{ xs: 12, md: 6, lg: 6, xl: 6 }}>
          <img src={ContactImage} />
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6, lg: 6, xl: 6 }}>
          <Grid2>
            <Grid2></Grid2>
            <Grid2></Grid2>
            <Grid2></Grid2>
          </Grid2>
        </Grid2>
      </Grid2>

      <Grid2 sx={{ px: 4, py: 5 }}>
        <NewsLetter />
      </Grid2>
    </Box>
  )
}

export default Contact