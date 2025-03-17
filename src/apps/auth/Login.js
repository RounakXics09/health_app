import { Box, Button, Card, CardContent, Checkbox, FormControlLabel, FormLabel, Grid2, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router';
import TermsFooter from '../components/TermsFooter';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
  };

  const handleClick = (e) => {
    navigate("/auth/register");
  }

  const handleForgotClick = (e) => {
    navigate("/auth/forgotPassword");
  }



  return (
    <Box sx={{ height: '100vh', px: { sm: 2, md: 6, lg: 8, xl: 8 }, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <Grid2>
        <Card className='login-card' sx={{ p: { sm: 2, md: 3, lg: 3, xl: 3 } }}>
          <CardContent>
            <Grid2 className='login-header' align="center" >
              Welcome Back to Fitness Club
            </Grid2>
            <Grid2 className='login-header-desc' align="center" >
              Enter your username and password to continue.
            </Grid2>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
              <FormLabel className='form-label'>Email<span>*</span></FormLabel>
              <TextField
                fullWidth
                type="email"
                size='small'
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                sx={{my:1}}
              />
              <FormLabel className='form-label'>Password<span>*</span></FormLabel>
              <TextField
                fullWidth
                type="password"
                size='small'
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                sx={{my:1}}
              />

              <Grid2 sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Grid2>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        className='login-inner-text'
                      />
                    }
                    className='login-inner-text'
                    label="Remember me"
                  />
                </Grid2>
                <Grid2 >
                  <Grid2 onClick={() => { handleForgotClick() }} className='login-links'>
                    Forgot Password
                  </Grid2>
                </Grid2>
              </Grid2>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                className='login-button'
                sx={{ mt: 3, mb: 4 }}
              >
                Log in
              </Button>
            </Box>
            <Grid2 className='login-inner-text' sx={{ mt: { sm: 1, md: 2, lg: 2 } }}>
              Don't have an account?{" "}
              <span onClick={() => { handleClick('login') }} className='login-links'>
                Sign up
              </span>
            </Grid2>
          </CardContent>
        </Card>
      </Grid2>
      <TermsFooter />
    </Box>
  )
}

export default Login