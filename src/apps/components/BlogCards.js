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
                    <img src={props.blog_array.images} width={'100%'} height={'100%'} />
                </Grid2>
                <Grid2 sx={{ display: 'flex', py: 2 }}>
                    <Grid2 className='div-center'><img src={CalendarIcon} width={'20px'} height={'20px'} style={{ paddingRight: '8px' }} />
                        {props.blog_array.date}
                    </Grid2>
                    <Grid2 className='div-center' sx={{ pl: 2 }}><img src={ClockIcon} width={'20px'} height={'20px'} style={{ paddingRight: '8px' }} />
                        {props.blog_array.time}
                    </Grid2>
                </Grid2>
                <Grid2 className='div-center'>
                    <Grid2 className='blog-card-heading'>
                        {props.blog_array.heading}
                    </Grid2>
                    <img src={arrowUpRight} width={'24px'} height={'24px'} style={{ paddingLeft: '8px' }} />
                </Grid2>
                <Grid2 className='blog-card-heading-desc'>{props.blog_array.description}</Grid2>
                <Grid2 className='blog-card-chips' sx={{ display: 'flex' }}>
                    {
                        props.blog_array?.gym_points?.map((e,i) => {
                            return (
                                <Grid2 className='blog-chips' key={i} sx={{backgroundColor:`${i === 2 ? '#2AAF74' : '#F2F2F2'}`,color:`${i === 2 ? '#ffffff' : '#132B35'}`}}>
                                    {e}
                                </Grid2>
                            )
                        })
                    }
                </Grid2>
            </Grid2>
        </Box>
    )
}

export default BlogCards