import { Box, Grid2 } from '@mui/material'
import React from 'react'

function NewsLetter() {
    return (
        <Box className='news-letter-container'>
            <Grid2 container>
                <Grid2 size={{ sm: 12, md: 7, lg: 7, xl: 7 }}>
                    <Grid2 className='news-letter-heading'>Join our weekly newsletter</Grid2>
                    <Grid2 className='news-letter-description'>Eat Smart, Stay Healthy! 🥗 Join our weekly diet planner newsletter for expert meal plans, nutrition tips, and healthy recipes straight to your inbox. Sign up now!</Grid2>
                </Grid2>
                <Grid2 size={{ sm: 12, md: 5, lg: 5, xl: 5 }}>
                    
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default NewsLetter