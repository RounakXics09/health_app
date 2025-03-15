import { Box, Grid2 } from '@mui/material'
import React, { useEffect } from 'react'
import BlogImage from '../assests/BlogImage.svg'
import CalendarIcon from '../assests/CalendarIcon.png'
import ClockIcon from '../assests/ClockIcon.png'
import arrowUpRight from '../assests/arrowUpRight.png'
import { useNavigate } from 'react-router'
function BlogCards(props) {
    const navigate = useNavigate();

    useEffect(() => {
        console.log("props", props)
    }, [])

    const handleClick = (e) => {
        console.log(e)
        navigate("/blog/details");
    }

    return (
        <Box className='blog-card' onClick={(e) => { handleClick(e) }}>
            <Grid2>
                <Grid2 sx={{ overflow: 'hidden' }}>
                    <img src={BlogImage} width={'100%'} height={'100%'} />
                </Grid2>
                <Grid2 sx={{ display: 'flex', py: 2 }}>
                    <Grid2 className='div-center'><img src={CalendarIcon} width={'20px'} height={'20px'} style={{ paddingRight: '8px' }} /> March 10, 2025</Grid2>
                    <Grid2 className='div-center' sx={{ pl: 2 }}><img src={ClockIcon} width={'20px'} height={'20px'} style={{ paddingRight: '8px' }} /> 8:00 AM</Grid2>
                </Grid2>
                <Grid2 className='div-center'>
                    <Grid2 className='blog-card-heading'>
                        The Ultimate 7-Day Diet Plan for Weight Loss
                    </Grid2>
                    <img src={arrowUpRight} width={'24px'} height={'24px'} style={{ paddingLeft: '8px' }} />
                </Grid2>
                <Grid2 className='blog-card-heading-desc'>A simple and effective 7-day diet plan to help you shed extra pounds while maintaining balanced nutrition.</Grid2>
                <Grid2 className='blog-card-chips' sx={{ display: 'flex' }}>
                    <Grid2 className='blog-chips'>
                        LiftingWeights
                    </Grid2>
                    <Grid2 className='blog-chips'>
                        Weight Loss
                    </Grid2>
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default BlogCards