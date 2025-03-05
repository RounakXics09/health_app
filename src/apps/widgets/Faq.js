import { Accordion, AccordionDetails, AccordionSummary, Box, Grid2, Typography } from '@mui/material'
import React from 'react'

function Faq() {
  return (
    <Box>
      <Grid2 container columnSpacing={5}>
        <Grid2 item size={{ xs: 12, sm: 12, md: 5, lg: 5, xl: 5 }}>
          <Grid2 className='health-text'> Frequently <span className='health-secondary-text'>Asked</span> Questions</Grid2>
          <Grid2 sx={{ py: 4 }} className='health-description'>Find answers to the most common questions about our platform, features, and services. If you need more help, feel free to reach out to our support team</Grid2>
          <Grid2 sx={{ display: 'flex' }}>
            <Grid2 className="filled-button">Contact us</Grid2>
          </Grid2>
        </Grid2>
        <Grid2 item size={{ xs: 12, sm: 12, md: 7, lg: 7, xl: 7 }}>
          <Grid2 sx={{ py: 2 }}>
            <Accordion sx={{ background: '#ffffff', boxShadow: 'none', borderBottom: '1px solid #CECECE', borderRadius: '0px' }}>
              <AccordionSummary
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span" sx={{ color: '#00000099', fontSize: '20px', fontWeight: '600' }}>How can I track my workouts using this platform?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: '#000000', fontSize: '16px', fontWeight: '400px', opacity: '50%' }}>
                  Our platform offers a comprehensive workout tracking feature where you can log exercises, track your progress, and view detailed stats about your performance. You can set reminders for workouts and track your daily fitness goals easily.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid2>
          <Grid2 sx={{ py: 2 }}>
            <Accordion sx={{ background: '#ffffff', boxShadow: 'none', borderBottom: '1px solid #CECECE', borderRadius: '0px' }}>
              <AccordionSummary
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span" sx={{ color: '#00000099', fontSize: '20px', fontWeight: '600' }}>Does the platform integrate with fitness wearables?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: '#000000', fontSize: '16px', fontWeight: '400px', opacity: '50%' }}>
                  Our platform offers a comprehensive workout tracking feature where you can log exercises, track your progress, and view detailed stats about your performance. You can set reminders for workouts and track your daily fitness goals easily.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid2>
          <Grid2 sx={{ py: 2 }}>
            <Accordion sx={{ background: '#ffffff', boxShadow: 'none', borderBottom: '1px solid #CECECE', borderRadius: '0px' }}>
              <AccordionSummary
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span" sx={{ color: '#00000099', fontSize: '20px', fontWeight: '600' }}>Can I customize my workout plan?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: '#000000', fontSize: '16px', fontWeight: '400px', opacity: '50%' }}>
                  Our platform offers a comprehensive workout tracking feature where you can log exercises, track your progress, and view detailed stats about your performance. You can set reminders for workouts and track your daily fitness goals easily.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid2>
          <Grid2 sx={{ py: 2 }}>
            <Accordion sx={{ background: '#ffffff', boxShadow: 'none', borderBottom: '1px solid #CECECE', borderRadius: '0px' }}>
              <AccordionSummary
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span" sx={{ color: '#00000099', fontSize: '20px', fontWeight: '600' }}>How do I set fitness goals and milestones?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: '#000000', fontSize: '16px', fontWeight: '400px', opacity: '50%' }}>
                  Our platform offers a comprehensive workout tracking feature where you can log exercises, track your progress, and view detailed stats about your performance. You can set reminders for workouts and track your daily fitness goals easily.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid2>
          <Grid2 sx={{ py: 2 }}>
            <Accordion sx={{ background: '#ffffff', boxShadow: 'none', borderBottom: '1px solid #CECECE', borderRadius: '0px' }}>
              <AccordionSummary
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span" sx={{ color: '#00000099', fontSize: '20px', fontWeight: '600' }}>Is there a mobile app version available?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: '#000000', fontSize: '16px', fontWeight: '400px', opacity: '50%' }}>
                  Our platform offers a comprehensive workout tracking feature where you can log exercises, track your progress, and view detailed stats about your performance. You can set reminders for workouts and track your daily fitness goals easily.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid2>
          <Grid2 sx={{ py: 2 }}>
            <Accordion sx={{ background: '#ffffff', boxShadow: 'none', borderBottom: '1px solid #CECECE', borderRadius: '0px' }}>
              <AccordionSummary
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span" sx={{ color: '#00000099', fontSize: '20px', fontWeight: '600' }}>Do I need a premium membership to access all features?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography sx={{ color: '#000000', fontSize: '16px', fontWeight: '400px', opacity: '50%' }}>
                  Our platform offers a comprehensive workout tracking feature where you can log exercises, track your progress, and view detailed stats about your performance. You can set reminders for workouts and track your daily fitness goals easily.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  )
}

export default Faq