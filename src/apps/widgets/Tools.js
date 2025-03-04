import { Box, Grid2 } from '@mui/material'
import React from 'react'

function Tools() {
  return (
    <Box>
      <Grid2></Grid2>
      <Grid2></Grid2>
      <Grid2 container className='div-center'>
        <Grid2 className='health-text'>Tools to <span className='health-secondary-text'>Elevate</span> Your Productivity</Grid2>
        <Grid2 sx={{py:4}} className='health-description text-center width-80'>Explore powerful tools designed to streamline your creative process. From seamless integrations to effortless content management, these features are built to enhance your productivity and creativity</Grid2>
      </Grid2>
      <Grid2 container>
        <Grid2></Grid2>
        <Grid2></Grid2>
        <Grid2></Grid2>
      </Grid2>
      <Grid2></Grid2>
    </Box>
  )
}

export default Tools