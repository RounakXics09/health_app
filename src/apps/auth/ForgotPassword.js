import { Box, Button, Card, CardContent, Checkbox, FormControlLabel, FormLabel, Grid2, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router';
import SuccessIcon from '../assests/SuccessIcon.svg'
import TermsFooter from '../components/TermsFooter';


function ForgotPassword() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [page, setPage] = useState("forgot_password");
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate("/auth/register");
  }

  const handleContinueClick = (e) => {
    setPage("new_password")
  }

  const handleSubmit = (e) => {
    setPage("success")
  }

  return (
    <Box sx={{ height: '100vh', px: { sm: 2, md: 6, lg: 8, xl: 8 }, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
      <Grid2>
        {
          page === "forgot_password" ?
            <Card className='login-card' sx={{ p: { sm: 2, md: 3, lg: 3, xl: 3 } }}>
              <CardContent>
                <Grid2 className='login-header' align="center" >
                  Request New Password
                </Grid2>
                <Grid2 className='login-header-desc' align="center" >
                  To reset your password. please etner the email address of your fitness club account
                </Grid2>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                  <FormLabel className='form-label'>Email<span>*</span></FormLabel>
                  <TextField
                    fullWidth
                    type="email"
                    size='small'
                    margin="normal"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    className='login-button'
                    onClick={() => { handleContinueClick() }}
                    sx={{ mt: 3, mb: 4 }}
                  >
                    Continue
                  </Button>
                </Box>
                <Grid2 className='login-inner-text' sx={{ mt: { sm: 1, md: 2, lg: 2 } }}>
                  Already have an account?{" "}
                  <span onClick={() => { handleClick('login') }} className='login-links'>
                    Log in
                  </span>
                </Grid2>
              </CardContent>
            </Card> : page === "new_password" ?
              <Card className='login-card' sx={{ p: { sm: 2, md: 3, lg: 3, xl: 3 } }}>
                <CardContent>
                  <Grid2 className='login-header' align="center" >
                    Create New Password
                  </Grid2>
                  <Grid2 className='login-header-desc' align="center" >
                    Send your email account to reset password and make new password
                  </Grid2>
                  <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                    <FormLabel className='form-label'>New Password<span>*</span></FormLabel>
                    <TextField
                      fullWidth
                      type="password"
                      size='small'
                      margin="normal"
                      variant="outlined"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <FormLabel className='form-label'>Confirm Password<span>*</span></FormLabel>
                    <TextField
                      fullWidth
                      type="password"
                      size='small'
                      margin="normal"
                      variant="outlined"
                      value={confirmpassword}
                      onChange={(e) => setConfirmpassword(e.target.value)}
                      required
                    />

                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      onClick={() => { handleSubmit() }}
                      className='login-button'
                      sx={{ mt: 3, mb: 4 }}
                    >
                      Continue
                    </Button>
                  </Box>
                  
                </CardContent>
              </Card> :
              <Card className='login-card' sx={{ p: { sm: 2, md: 3, lg: 3, xl: 3 } }}>
                <CardContent>

                  <Grid2 className='div-center' sx={{ py: 4, px: 5 }}>
                    <img src={SuccessIcon} width={'100%'} height={'100%'} />
                  </Grid2>
                  <Grid2 className='login-header' align="center" >
                    Password Successfully Reset
                  </Grid2>
                  <Grid2 className='login-header-desc' align="center" >
                    Your password has been reset
                  </Grid2>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    onClick={() => { handleClick('login') }}
                    className='login-button'
                    sx={{ mt: 2, mb: 4 }}
                  >
                    Login Now
                  </Button>
                </CardContent>
              </Card>
        }
      </Grid2>
      <TermsFooter />
    </Box>
  )
}

export default ForgotPassword