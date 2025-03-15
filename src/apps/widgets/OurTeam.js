import { Box, Grid2 } from '@mui/material'
import React from 'react'
import Linkedin from '../assests/linkedin.svg';
import Team1 from '../assests/Team1.png'
import Team2 from '../assests/Team2.png'
import Team3 from '../assests/Team3.png'
import Team4 from '../assests/Team4.png'
import TeamTwitter from '../assests/TeamTwitter.png'
import TeamLinkedin from '../assests/TeamLinkedin.png'

function OurTeam() {
    return (
        <Box sx={{ px: 5 }}>
            <Grid2 className='our-team-heading'>Our <span>Team</span></Grid2>
            <Grid2 className='our-team-description'>We’re a group of food lovers, tech geeks, and health enthusiasts who believe that eating right should be easy.</Grid2>
            <Grid2 container sx={{ py: 5 }} columnSpacing={8} rowSpacing={5}>
                <Grid2 size={{ xs: 12, sm: 12, md: 3, lg: 3, xl: 3 }}>
                    <Grid2 className='div-center d-flex-col team-card-container'>
                        <Grid2>
                            <img src={Team1} width={'80px'} height={'80px'} />
                        </Grid2>
                        <Grid2 className='team-card-name'>Corina McCoy</Grid2>
                        <Grid2 className='team-card-work'>Founder</Grid2>
                        <Grid2 className='team-card-idea'>Had a big idea to make diet planning simple.</Grid2>
                        <Grid2 className='div-center'>
                            <Grid2>
                                <img src={TeamTwitter} width={'20px'} height={'20px'} />
                            </Grid2>
                            <Grid2 sx={{ px: 2 }}>
                                <img src={TeamLinkedin} width={'20px'} height={'20px'} />
                            </Grid2>
                        </Grid2>
                    </Grid2>
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, md: 3, lg: 3, xl: 3 }}>
                    <Grid2 className='div-center d-flex-col team-card-container'>
                        <Grid2>
                            <img src={Team2} width={'80px'} height={'80px'} />
                        </Grid2>
                        <Grid2 className='team-card-name'>Rhonda Rhodes</Grid2>
                        <Grid2 className='team-card-work'>Nutrition Expert</Grid2>
                        <Grid2 className='team-card-idea'>Knows what’s good for you and helps craft the best meal plans.</Grid2>
                        <Grid2 className='div-center'>
                            <Grid2>
                                <img src={TeamTwitter} width={'20px'} height={'20px'} />
                            </Grid2>
                            <Grid2 sx={{ px: 2 }}>
                                <img src={TeamLinkedin} width={'20px'} height={'20px'} />
                            </Grid2>
                        </Grid2>
                    </Grid2>
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, md: 3, lg: 3, xl: 3 }}>
                    <Grid2 className='div-center d-flex-col team-card-container'>
                        <Grid2>
                            <img src={Team3} width={'80px'} height={'80px'} />
                        </Grid2>
                        <Grid2 className='team-card-name'>Daniel Hamilton</Grid2>
                        <Grid2 className='team-card-work'>AI Developer</Grid2>
                        <Grid2 className='team-card-idea'>Built the smart assistant that makes everything work smoothly.</Grid2>
                        <Grid2 className='div-center'>
                            <Grid2>
                                <img src={TeamTwitter} width={'20px'} height={'20px'} />
                            </Grid2>
                            <Grid2 sx={{ px: 2 }}>
                                <img src={TeamLinkedin} width={'20px'} height={'20px'} />
                            </Grid2>
                        </Grid2>
                    </Grid2>
                </Grid2>
                <Grid2 size={{ xs: 12, sm: 12, md: 3, lg: 3, xl: 3 }}>
                    <Grid2 className='div-center d-flex-col team-card-container'>
                        <Grid2>
                            <img src={Team4} width={'80px'} height={'80px'} />
                        </Grid2>
                        <Grid2 className='team-card-name'>Bradley Lawlor</Grid2>
                        <Grid2 className='team-card-work'>Support Lead</Grid2>
                        <Grid2 className='team-card-idea'>Always here to answer your questions and keep you on track.</Grid2>
                        <Grid2 className='div-center'>
                            <Grid2>
                                <img src={TeamTwitter} width={'20px'} height={'20px'} />
                            </Grid2>
                            <Grid2 sx={{ px: 2 }}>
                                <img src={TeamLinkedin} width={'20px'} height={'20px'} />
                            </Grid2>
                        </Grid2>
                    </Grid2>
                </Grid2>

            </Grid2>
        </Box>
    )
}

export default OurTeam