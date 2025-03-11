import { Box, Grid2 } from '@mui/material'
import React, { useEffect } from 'react'
import BlogImage from '../assests/BlogImage.svg'
function BlogCards(props) {

    useEffect(() => {
        console.log("props", props)
    }, [])

    return (
        <Box className='blog-card'>
            <Grid2>
                <Grid2 sx={{overflow:'hidden'}}>
                    <img src={BlogImage} width={'100%'} height={'100%'} />
                </Grid2>
                <Grid2 className='blog-card-heading'>The Ultimate 7-Day Diet Plan for Weight Loss</Grid2>
                <Grid2 className='blog-card-heading-desc'>A simple and effective 7-day diet plan to help you shed extra pounds while maintaining balanced nutrition.</Grid2>
                <Grid2 className='blog-card-chips'>
                    <Grid2>
                        LiftingWeights
                    </Grid2>
                    <Grid2>
                        Weight Loss
                    </Grid2>
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default BlogCards