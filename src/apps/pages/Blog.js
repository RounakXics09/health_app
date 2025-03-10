import React from 'react'
import BlogCards from '../components/BlogCards'
import { Box, Grid2 } from '@mui/material';


const Blog_array = [
    {
        id: 1,
        date: 'March 10, 2025',
        time: '8:00 AM',
        heading: 'The Ultimate Morning Workout Routine',
        description: 'Kickstart your day with this energizing 20-minute workout that boosts metabolism and improves focus.',
        gym_points: ['LiftingWeights', 'StrebgthTraining', 'Gym Motivation']
    },
    {
        id: 2,
        date: 'March 10, 2025',
        time: '8:00 AM',
        heading: 'The Ultimate Morning Workout Routine',
        description: 'Kickstart your day with this energizing 20-minute workout that boosts metabolism and improves focus.',
        gym_points: ['LiftingWeights', 'StrebgthTraining', 'Gym Motivation']
    },
    {
        id: 3,
        date: 'March 10, 2025',
        time: '8:00 AM',
        heading: 'The Ultimate Morning Workout Routine',
        description: 'Kickstart your day with this energizing 20-minute workout that boosts metabolism and improves focus.',
        gym_points: ['LiftingWeights', 'StrebgthTraining', 'Gym Motivation']
    }
]

function Blog() {
    return (
        <Box sx={{px:5,py:5}}>
            <Grid2 container columnSpacing={6} rowSpacing={6}>
                {
                    Blog_array.map((e, i) => {
                        return (
                            <Grid2 item size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>
                                <BlogCards key={i} Blog_array={e} />
                            </Grid2>
                        );
                    })
                }
            </Grid2>
        </Box>
    )
}

export default Blog