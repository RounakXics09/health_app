import { Grid2 } from '@mui/material'
import React from 'react'
import ContactImage from '../assests/ContactImage.svg'

function Contact() {
  return (
    <Grid2>
      <Grid2>Contact Us</Grid2>
      <Grid2>Looking for personalized diet plans or have questions about nutrition? We’re here to help! Get in touch with us for expert guidance on your health journey</Grid2>

      <Grid2 container>
        <Grid2 item size={{ xs: 4, md: 4, lg: 4, xl: 4 }}>
          <Grid2>Phone:</Grid2>
          <Grid2>Phone:</Grid2>
          <Grid2>+1 234 567 8901</Grid2>
        </Grid2>
        <Grid2 item size={{ xs: 4, md: 4, lg: 4, xl: 4 }}>
          <Grid2>Email:</Grid2>
          <Grid2>Email:</Grid2>
          <Grid2>contact@fitdummy.com</Grid2>
        </Grid2>
        <Grid2 item size={{ xs: 4, md: 4, lg: 4, xl: 4 }}>
          <Grid2>Address:</Grid2>
          <Grid2>Address:</Grid2>
          <Grid2>1234 Fit Street, Muscle City, FC 56789</Grid2>
        </Grid2>
      </Grid2>

      <Grid2 container>
        <Grid2 item size={{ xs: 12, md: 6, lg: 6, xl: 6 }}>
          <img src={ContactImage} />
        </Grid2>
        <Grid2 item size={{ xs: 12, md: 6, lg: 6, xl: 6 }}>
          <Grid2>
          <Grid2></Grid2>
          <Grid2></Grid2>
          <Grid2></Grid2>
          </Grid2>
        </Grid2>
      </Grid2>
    </Grid2>
  )
}

export default Contact