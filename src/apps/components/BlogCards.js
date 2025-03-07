import { Box, Grid2 } from '@mui/material'
import React, { useEffect } from 'react'

function BlogCards(props) {

    useEffect(() => {
        console.log("props", props)
    }, [])

    return (
        <Box>
            <Grid2>
                <Grid2>
                    <img src="" />
                </Grid2>
                <Grid2>The Ultimate Morning Workout Routine</Grid2>
                <Grid2>Kickstart your day with this energizing 20-minute workout that boosts metabolism and improves focus.</Grid2>
                <Grid2>LiftingWeights</Grid2>
                <Grid2></Grid2>
            </Grid2>
        </Box>
    )
}

export default BlogCards