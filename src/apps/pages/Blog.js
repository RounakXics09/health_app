import React from 'react'
import BlogCards from '../components/BlogCards'
import { Box, Grid2 } from '@mui/material';
import Goals from '../widgets/Goals'


const Blog_array = [
    {
        id: 1,
        date: 'March 10, 2025',
        time: '8:00 AM',
        heading: 'The Ultimate Morning Workout Routine',
        description: 'Kickstart your day with this energizing 20-minute workout that boosts metabolism and improves focus.',
        gym_points: ['Weight Loss', 'Diet Plan', 'Healthy Eating'],
        images:'/images/BlogImage.svg'
    },
    {
        id: 2,
        date: 'March 12, 2025',
        time: '6:30 AM',
        heading: 'How to Create a Personalized Diet Plan',
        description: 'Learn how to customize your diet plan based on your body type, fitness goals, and lifestyle.',
        gym_points: ['Personalized Diet', 'Health Goals', 'Nutrition Tips'],
        images:'/images/BlogImage1.svg'
    },
    {
        id: 3,
        date: 'March 14, 2025',
        time: '10:00 AM',
        heading: 'Best Foods for a High-Protein Diet Plan',
        description: 'Discover the best high-protein foods to build muscle and stay energized throughout the day.',
        gym_points: ['High Protein', 'Healthy Living', 'Fitness Food '],
        images:'/images/BlogImage2.svg'
    },
    {
        id: 4,
        date: 'March 16, 2025',
        time: '9:00 AM',
        heading: '1200-Calorie Meal Plan for Effective Weight Loss',
        description: 'A carefully crafted 1200-calorie meal plan to help you lose weight while feeling satisfied.',
        gym_points: ['CalorieCounting', 'HealthyWeightLoss', 'DietTips'],
        images:'/images/BlogImage3.svg'
    },
    {
        id: 5,
        date: 'March 18, 2025',
        time: '7:00 AM',
        heading: 'Keto Diet Meal Plan for Beginners',
        description: 'Everything you need to know about starting a keto diet, including a simple meal plan..',
        gym_points: ['KetoDiet', 'LowCarb', 'HealthyKeto'],
        images:'/images/BlogImage4.svg'
    },
    {
        id: 6,
        date: 'March 20, 2025',
        time: '5:30 AM',
        heading: 'Intermittent Fasting Diet Plan: A Complete Guide',
        description: 'A beginner-friendly guide to intermittent fasting, including meal timing and benefits.',
        gym_points: ['IntermittentFasting', 'HealthyLifestyle', 'FastAndFit'],
        images:'/images/BlogImage5.svg'
    },
    {
        id: 7,
        date: 'March 12, 2025',
        time: '6:30 AM',
        heading: 'Plant-Based Diet Meal Plan for Beginners',
        description: 'A complete plant-based diet plan with nutritious and delicious vegan meal ideas.',
        gym_points: ['PlantBased', 'VeganMeals', 'HealthyLiving'],
        images:'/images/BlogImage6.svg'
    },
    {
        id: 8,
        date: 'March 24, 2025',
        time: '11:30 AM',
        heading: 'A Balanced Diet Plan for Busy Professionals',
        description: 'Quick and easy diet plans for professionals who struggle with meal prep and time management.',
        gym_points: ['BusyLife', 'HealthyMeals', 'QuickNutrition'],
        images:'/images/BlogImage7.svg'
    },
    {
        id: 9,
        date: 'March 26, 2025',
        time: '4:00 AM',
        heading: 'Mediterranean Diet: A Heart-Healthy Meal Plan',
        description: 'Explore the Mediterranean diet and how it supports heart health and longevity.',
        gym_points: ['MediterraneanDiet', 'HeartHealth', 'HealthyLiving'],
        images:'/images/BlogImage8.svg'
    }
]

function Blog() {
    return (
        <Box sx={{ px: 5, pt:'85px' }}>
            <Grid2 className='blog-heading' sx={{py:5}}>All blog posts</Grid2>
            <Grid2 container columnSpacing={6} rowSpacing={6}>
                {
                    Blog_array.map((e, i) => {
                        return (
                            <Grid2 size={{ xs: 12, sm: 12, md: 4, lg: 4, xl: 4 }}>
                                <BlogCards key={i} blog_array={e} />
                            </Grid2>
                        );
                    })
                }
            </Grid2>
            <Goals />
        </Box>
    )
}

export default Blog