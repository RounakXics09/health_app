import { Accordion, AccordionDetails, AccordionSummary, Box, Grid2, Typography } from '@mui/material'
import React from 'react'

function Faq() {
  return (
    <Box>
      <Grid2 container columnSpacing={4}>
        <Grid2 item size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>
          <Grid2 className='health-text'> Frequently <span className='health-secondary-text'>Asked</span> Questions</Grid2>
          <Grid2 sx={{ py: 4 }} className='health-description'>Find answers to the most common questions about our platform, features, and services. If you need more help, feel free to reach out to our support team</Grid2>
          <Grid2 className="filled-button">Contact us</Grid2>
        </Grid2>
        <Grid2 item size={{ xs: 12, sm: 12, md: 8, lg: 8, xl: 8 }}>
          <Grid2 sx={{ py: 2 }}>
            <Accordion>
              <AccordionSummary
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">How can I track my workouts using this platform?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Our platform offers a comprehensive workout tracking feature where you can log exercises, track your progress, and view detailed stats about your performance. You can set reminders for workouts and track your daily fitness goals easily.
              </AccordionDetails>
            </Accordion>
          </Grid2>
          <Grid2 sx={{ py: 2 }}>
            <Accordion>
              <AccordionSummary
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">Does the platform integrate with fitness wearables?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>
          </Grid2>
          <Grid2 sx={{ py: 2 }}>
            <Accordion>
              <AccordionSummary
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">Can I customize my workout plan?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>
          </Grid2>
          <Grid2 sx={{ py: 2 }}>
            <Accordion>
              <AccordionSummary
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">How do I set fitness goals and milestones?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>
          </Grid2>
          <Grid2 sx={{ py: 2 }}>
            <Accordion>
              <AccordionSummary
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">Is there a mobile app version available?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>
          </Grid2>
          <Grid2 sx={{ py: 2 }}>
            <Accordion>
              <AccordionSummary
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography component="span">Do I need a premium membership to access all features?</Typography>
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </AccordionDetails>
            </Accordion>
          </Grid2>
        </Grid2>
      </Grid2>
    </Box>
  )
}

export default Faq