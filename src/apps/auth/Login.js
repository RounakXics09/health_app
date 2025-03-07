import { Box, Button, Card, CardContent, Checkbox, FormControlLabel, Grid2, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with:", { email, password });
  };

  return (
    <Box sx={{ height: '100vh', px: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Grid2>
        <Card sx={{ p: 3, boxShadow: 3, borderRadius: 3 }}>
          <CardContent>
            <Typography variant="h5" component="h1" align="center" gutterBottom>
              Welcome Back to Fitness Club
            </Typography>
            <Typography variant="h5" component="h1" align="center" gutterBottom>
              Enter your username and password to continue.
            </Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
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

              <Grid2 sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Grid2>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        color="primary"
                      />
                    }
                    label="Remember me"
                  />
                </Grid2>
                <Grid2 >
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid2>
              </Grid2>

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, bgcolor: "primary.main", ":hover": { bgcolor: "primary.dark" } }}
              >
                Login
              </Button>
            </Box>
            <Typography variant="body2" align="center" sx={{ mt: 2 }}>
              Don't have an account?{" "}
              <a href="#" style={{ color: "#1976d2", textDecoration: "none" }}>
                Sign up
              </a>
            </Typography>
          </CardContent>
        </Card>
      </Grid2>
    </Box>
  )
}

export default Login