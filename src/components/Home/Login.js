import React from "react";
import { Grid, Avatar, Button, CssBaseline, 
    TextField, FormControlLabel, Checkbox, 
    Link, Box,  Typography, Container} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://www.citibank.com.sg/wealth-management/citigold/">
          Citi Wealth Management
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  
  const theme = createTheme();
  
  export default function SignIn() {
    const navigate = useNavigate();
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        bankid: data.get('bankid'),
        password: data.get('password'),
      });
      if (data.get('bankid') == 'banker'){
        // add route to banker page
        setUser('Banker');
        console.log('Banker Page');
        navigate('/Manage%20Appointments')
      }
      else{
        // add route to client page
        setUser('Client');
        console.log('Client Page');
        navigate('/Book%20Appointments')
      }
    };
  
    const [user, setUser] = useState();

    return (
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="bankid"
                label="Bank ID"
                name="bankid"
                autoComplete="bankid"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
    );
  }