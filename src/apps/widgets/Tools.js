import { Box, Grid2 } from '@mui/material'
import React from 'react'
import Tools1 from '../assests/Tools1.svg'
import Tools2 from '../assests/Tools2.svg'
import Tools3 from '../assests/Tools3.svg'
import Tools4 from '../assests/Tools4.svg'
import Tools5 from '../assests/Tools5.svg'

function Tools() {
  return (
    <Box>
      <Grid2 container className='div-center'>
        <Grid2 className='health-text'>Tools to <span className='health-secondary-text'>Elevate</span> Your Productivity</Grid2>
        <Grid2 sx={{ py: 4 }} className='health-description text-center width-80'>Explore powerful tools designed to streamline your creative process. From seamless integrations to effortless content management, these features are built to enhance your productivity and creativity</Grid2>
      </Grid2>
      <Grid2 container columnSpacing={4} rowSpacing={4}>
        <Grid2 item size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }} className='tools-card-container' sx={{ height: '417px' }}>
          <div style={{ height: '317px', display: 'flex', overflow: 'hidden', alignItems: 'flex-start' }}>
            <img src={Tools1} style={{ overflow: 'hidden' }} />
          </div>
          <Grid2 sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', position: 'absolute', right: '20px', left: '20px' }} className='tools-bottom'>
            <Grid2 sx={{ px: 2, py: 5 }}>
              <Grid2 className='real-results-name'>Customizable Workout Plans</Grid2>
              <Grid2 sx={{py:2}} className='real-results-text'>Tailor your workout routines to fit your unique goals and preferences, with easy-to-edit plans created by top trainers</Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2 item size={{ xs: 12, sm: 12, md: 6, lg: 6, xl: 6 }} className='tools-card-container' sx={{ height: '417px' }}>
          <div style={{ height: '317px', display: 'flex', overflow: 'hidden', alignItems: 'flex-start' }}>
            <img src={Tools2} style={{ overflow: 'hidden' }} />
          </div>
          <Grid2 sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', position: 'absolute', right: '20px', left: '20px' }} className='tools-bottom'>
            <Grid2 sx={{ px: 2, py: 5 }}>
              <Grid2 className='real-results-name'>Progress Tracking</Grid2>
              <Grid2 sx={{py:2}} className='real-results-text'>Monitor your fitness progress with real-time updates on calories burned, steps taken, and muscle mass gained</Grid2>
            </Grid2>
          </Grid2>
        </Grid2>

        <Grid2 item size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }} className='tools-card-container' sx={{ height: '387px' }}>
          <div style={{ height: '250px', display: 'flex', overflow: 'hidden', alignItems: 'flex-start' }}>
            <img src={Tools3} style={{ overflow: 'hidden' }} />
          </div>
          <Grid2 sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', position: 'absolute', right: '20px', left: '20px' }} className='tools-bottom'>
            <Grid2 sx={{ px: 2, py: 5 }}>
              <Grid2 className='real-results-name'>Meal Prep Integration</Grid2>
              <Grid2 sx={{py:2}} className='real-results-text'>Plan and track your meals alongside your workouts for a holistic approach to health.</Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2 item size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }} className='tools-card-container' sx={{ height: '387px' }}>
          <div style={{ height: '250px', display: 'flex', overflow: 'hidden', alignItems: 'flex-start' }}>
            <img src={Tools4} style={{ overflow: 'hidden' }} />
          </div>
          <Grid2 sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', position: 'absolute', right: '20px', left: '20px' }} className='tools-bottom'>
            <Grid2 sx={{ px: 2, py: 5 }}>
              <Grid2 className='real-results-name'>Body Analysis Insights</Grid2>
              <Grid2 sx={{py:2}} className='real-results-text'>Track your weight, BMI, and calories burned to improve your fitness results.</Grid2>
            </Grid2>
          </Grid2>
        </Grid2>
        <Grid2 item size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }} className='tools-card-container' sx={{ height: '387px' }}>
          <div style={{ height: '250px', display: 'flex', overflow: 'hidden', alignItems: 'flex-start' }}>
            <img src={Tools5} style={{ overflow: 'hidden' }} />
          </div>
          <Grid2 sx={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', position: 'absolute', right: '20px', left: '20px' }} className='tools-bottom'>
            <Grid2 sx={{ px: 2, py: 5 }}>
              <Grid2 className='real-results-name'>Smart Workout Scheduler</Grid2>
              <Grid2 sx={{py:2}} className='real-results-text'>Easily plan and organize your workouts and activities with a clear, daily timeline.</Grid2>
            </Grid2>
          </Grid2>
        </Grid2>

      </Grid2>
      <Grid2 className='div-center'>
        <Grid2 className="filled-button">Explore More</Grid2>
      </Grid2>
    </Box>
  )
}

export default Tools