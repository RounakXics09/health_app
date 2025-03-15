import { Box, Button, Card, CardContent, Checkbox, FormControlLabel, FormLabel, Grid2, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'

function Register() {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Logging in with:", { email, password });
    };

    const handleClick = (e) => {
      navigate("/auth/login");
    }

  return (
    <Box sx={{ height: '100vh', px: { sm: 2, md: 6, lg: 8, xl: 8 }, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column',overflow:'hidden' }}>
      <Grid2>
        <Card className='login-card' sx={{ p: { sm: 2, md: 3, lg: 3, xl: 3 },height:'80vh' }}>
          <CardContent sx={{overflowY:'auto',height:'75vh',p: { sm: 2, md: 3, lg: 3, xl: 3 }}}>
            <Grid2 className='login-header' align="center" >
              Welcome Back to Fitness Club
            </Grid2>
            <Grid2 className='login-header-desc' align="center" >
              Enter your username and password to continue.
            </Grid2>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
              <FormLabel className='form-label'>Full Name*</FormLabel>
              <TextField
                fullWidth
                label="Full Name"
                type="text"
                size='small'
                margin="normal"
                variant="outlined"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
              <FormLabel className='form-label'>Email*</FormLabel>
              <TextField
                fullWidth
                label="Email"
                type="email"
                size='small'
                margin="normal"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <FormLabel className='form-label'>Mobile Number*</FormLabel>
              <TextField
                fullWidth
                label="Mobile Number"
                type="number"
                size='small'
                margin="normal"
                variant="outlined"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                required
              />
              <FormLabel className='form-label'>Password*</FormLabel>
              <TextField
                fullWidth
                label="Password"
                type="password"
                size='small'
                margin="normal"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                className='login-button'
                sx={{ mt: 3, mb: 4 }}
              >
                Sign Up
              </Button>
            </Box>
            <Grid2 className='login-inner-text' sx={{ mt: { sm: 1, md: 2, lg: 2 } }}>
              Already have an account?{" "}
              <span onClick={() => { handleClick('login') }} className='login-links'>
                Log in
              </span>
            </Grid2>
          </CardContent>
        </Card>
      </Grid2>
      <Grid2 className='login-bottom-text' sx={{ pt: { sm: 1, md: 3, lg: 3 }, pb: 1 }}>
        Privacy Policy   |    Terms of Service
      </Grid2>
      <Grid2 className='login-bottom-text'>
        © 2025 fintnessclub. All rights reserved.
      </Grid2>
    </Box>
  )
}

export default Register