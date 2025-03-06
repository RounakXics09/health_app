import { Box, Grid2 } from '@mui/material'
import React from 'react'
import { motion } from 'framer-motion';
import RealImage from '../assests/RealImage.png'
import RealImage1 from '../assests/RealImage1.png'
import RealImage2 from '../assests/RealImage2.png'
import RealImage3 from '../assests/RealImage3.png'
import RealImage4 from '../assests/RealImage4.png'
import RealImage5 from '../assests/RealImage5.png'
import RealImage6 from '../assests/RealImage6.png'
import RealImage7 from '../assests/RealImage7.png'
import RealImage8 from '../assests/RealImage8.png'

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

function RealResults() {
  return (
    <Box>
      <Grid2 container className='div-center'>
        <Grid2 className='health-text'>Real <span className='health-secondary-text'>Results</span> From Real <span className='health-secondary-text'>Users</span> </Grid2>
        <Grid2 sx={{ py: 4 }} className='health-description text-center width-50 width-100-sm'>Hear from our fitness community about how our platform has helped them transform their health and fitness journey</Grid2>
      </Grid2>
      <Grid2 container columnSpacing={4} rowSpacing={4}>
        <Grid2 item size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }} >
          <motion.div className='real-card-container' initial='hidden' animate='visible' variants={fadeIn} whileHover={{ y: -10, transition: { duration: 0.2 } }}>
            <Grid2 className='real-results-text'>This platform has transformed my fitness routine! It's so easy to track progress and schedule workouts. I've never been more motivated..</Grid2>
            <Grid2 sx={{ display: 'flex', alignItems: 'center', py: 3 }}>
              <Grid2>
                <img src={RealImage} width={'46px'} height={'46px'} />
              </Grid2>
              <Grid2 px={2} height={'100%'}>
                <Grid2 className='real-results-name'>Autumn Phillips</Grid2>
                <Grid2 className='real-results-id'>@Sarah_fit</Grid2>
              </Grid2>
            </Grid2>
          </motion.div>
        </Grid2>
        <Grid2 item size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>
          <motion.div className='real-card-container' initial='hidden' animate='visible' variants={fadeIn} whileHover={{ y: -10, transition: { duration: 0.2 } }}>
            <Grid2 className='real-results-text'>The dashboard gives me everything I need to stay on top of my goals. Best fitness app out there, hands down.</Grid2>
            <Grid2 sx={{ display: 'flex', alignItems: 'center', py: 3 }}>
              <Grid2>
                <img src={RealImage1} width={'46px'} height={'46px'} />
              </Grid2>
              <Grid2 px={2} height={'100%'}>
                <Grid2 className='real-results-name'>David Elson</Grid2>
                <Grid2 className='real-results-id'>@Sarah_fit</Grid2>
              </Grid2>
            </Grid2>
          </motion.div>
        </Grid2>
        <Grid2 item size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>
          <motion.div className='real-card-container' initial='hidden' animate='visible' variants={fadeIn} whileHover={{ y: -10, transition: { duration: 0.2 } }}>
            <Grid2 className='real-results-text'>Keeping track of my daily water intake and workouts has never been this fun! Love the design and functionality.</Grid2>
            <Grid2 sx={{ display: 'flex', alignItems: 'center', py: 3 }}>
              <Grid2>
                <img src={RealImage2} width={'46px'} height={'46px'} />
              </Grid2>
              <Grid2 px={2} height={'100%'}>
                <Grid2 className='real-results-name'>Corina McCoy</Grid2>
                <Grid2 className='real-results-id'>@Sarah_fit</Grid2>
              </Grid2>
            </Grid2>
          </motion.div>
        </Grid2>
        <Grid2 item size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>
          <motion.div className='real-card-container' initial='hidden' animate='visible' variants={fadeIn} whileHover={{ y: -10, transition: { duration: 0.2 } }}>
            <Grid2 className='real-results-text'>Ever since I started using this app, my fitness journey has become more structured and enjoyable. It's like having a personal trainer</Grid2>
            <Grid2 sx={{ display: 'flex', alignItems: 'center', py: 3 }}>
              <Grid2>
                <img src={RealImage3} width={'46px'} height={'46px'} />
              </Grid2>
              <Grid2 px={2} height={'100%'}>
                <Grid2 className='real-results-name'>Lorri Warf</Grid2>
                <Grid2 className='real-results-id'>@Sarah_fit</Grid2>
              </Grid2>
            </Grid2>
          </motion.div>
        </Grid2>
        <Grid2 item size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>
          <motion.div className='real-card-container' initial='hidden' animate='visible' variants={fadeIn} whileHover={{ y: -10, transition: { duration: 0.2 } }}>
            <Grid2 className='real-results-text'>This app is a game-changer for meal prep and workout scheduling. My body transformation is all thanks to this amazing tool.</Grid2>
            <Grid2 sx={{ display: 'flex', alignItems: 'center', py: 3 }}>
              <Grid2>
                <img src={RealImage4} width={'46px'} height={'46px'} />
              </Grid2>
              <Grid2 px={2} height={'100%'}>
                <Grid2 className='real-results-name'>Kimberly Mastrangelo</Grid2>
                <Grid2 className='real-results-id'>@Sarah_fit</Grid2>
              </Grid2>
            </Grid2>
          </motion.div>
        </Grid2>
        <Grid2 item size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>
          <motion.div className='real-card-container' initial='hidden' animate='visible' variants={fadeIn} whileHover={{ y: -10, transition: { duration: 0.2 } }}>
            <Grid2 className='real-results-text'>I've been using this for months, and I can't believe the progress I've made. Tracking everything from steps to calories has been so helpful. al</Grid2>
            <Grid2 sx={{ display: 'flex', alignItems: 'center', py: 3 }}>
              <Grid2>
                <img src={RealImage5} width={'46px'} height={'46px'} />
              </Grid2>
              <Grid2 px={2} height={'100%'}>
                <Grid2 className='real-results-name'>Patricia Sanders</Grid2>
                <Grid2 className='real-results-id'>@Sarah_fit</Grid2>
              </Grid2>
            </Grid2>
          </motion.div>
        </Grid2>
        <Grid2 item size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>
          <motion.div className='real-card-container' initial='hidden' animate='visible' variants={fadeIn} whileHover={{ y: -10, transition: { duration: 0.2 } }}>
            <Grid2 className='real-results-text'>I'm so grateful I found this app! It has helped me stay consistent, and I love the reminders to stay active every day. Thank you!</Grid2>
            <Grid2 sx={{ display: 'flex', alignItems: 'center', py: 3 }}>
              <Grid2>
                <img src={RealImage6} width={'46px'} height={'46px'} />
              </Grid2>
              <Grid2 px={2} height={'100%'}>
                <Grid2 className='real-results-name'>Kurt Bates</Grid2>
                <Grid2 className='real-results-id'>@Sarah_fit</Grid2>
              </Grid2>
            </Grid2>
          </motion.div>
        </Grid2>
        <Grid2 item size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>
          <motion.div className='real-card-container' initial='hidden' animate='visible' variants={fadeIn} whileHover={{ y: -10, transition: { duration: 0.2 } }}>
            <Grid2 className='real-results-text'>This platform is the real deal! I've never had such detailed insights into my workouts before. Absolutely love it</Grid2>
            <Grid2 sx={{ display: 'flex', alignItems: 'center', py: 3 }}>
              <Grid2>
                <img src={RealImage7} width={'46px'} height={'46px'} />
              </Grid2>
              <Grid2 px={2} height={'100%'}>
                <Grid2 className='real-results-name'>Katie Sims</Grid2>
                <Grid2 className='real-results-id'>@Sarah_fit</Grid2>
              </Grid2>
            </Grid2>
          </motion.div>
        </Grid2>
        <Grid2 item size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>
          <motion.div className='real-card-container' initial='hidden' animate='visible' variants={fadeIn} whileHover={{ y: -10, transition: { duration: 0.2 } }}>
            <Grid2 className='real-results-text'>The personalized workout suggestions are on point! They make it so easy to push myself and achieve my fitness goals.</Grid2>
            <Grid2 sx={{ display: 'flex', alignItems: 'center', py: 3 }}>
              <Grid2>
                <img src={RealImage8} width={'46px'} height={'46px'} />
              </Grid2>
              <Grid2 px={2} height={'100%'}>
                <Grid2 className='real-results-name'>John Dukes</Grid2>
                <Grid2 className='real-results-id'>@Sarah_fit</Grid2>
              </Grid2>
            </Grid2>
          </motion.div>
        </Grid2>

      </Grid2>
    </Box>
  )
}

export default RealResults