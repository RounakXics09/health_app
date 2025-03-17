import { Box, Grid2 } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router';

function TermsFooter() {

    const navigate = useNavigate();

    const handleBottomClick = (e) => {
        navigate(`/${e}`);
    }

    return (
        <Box>
            <Grid2 className='login-bottom-text' sx={{ pt: { sm: 1, md: 3, lg: 3 }, pb: 1 }}>
                <span style={{ cursor: 'pointer' }} onClick={() => { handleBottomClick('privacy-policy') }}>Privacy Policy</span>
                <span style={{paddingInline:'10px'}}>|</span>
                <span style={{ cursor: 'pointer' }} onClick={() => { handleBottomClick('terms-service') }}>Terms of Service</span>
            </Grid2>
            <Grid2 className='login-bottom-text'>
                © 2025 fintnessclub. All rights reserved.
            </Grid2>
        </Box>
    )
}

export default TermsFooter