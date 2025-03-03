import { Accordion, AccordionDetails, AccordionSummary, Box, Grid2, Typography } from '@mui/material'
import React from 'react'

function Faq() {
  return (
    <Box>
      <Grid2 container columnSpacing={4}>
        <Grid2 item size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>
          <Grid2> Frequently Asked Questions</Grid2>
          <Grid2>Find answers to the most common questions about our platform, features, and services. If you need more help, feel free to reach out to our support team</Grid2>
        </Grid2>
        <Grid2 item size={{ xs: 12, sm: 12, md: 8, lg: 8, xl: 8 }}>
          <Accordion>
            <AccordionSummary
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </AccordionDetails>
          </Accordion>
        </Grid2>
      </Grid2>
    </Box>
  )
}

export default Faq