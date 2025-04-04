// src/pages/Login.js
import React, { useState } from 'react';
import axios from '../axiosConfig';
import { TextField, Button, Typography, Container, Paper, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ setAuth }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('role', response.data.role); // Store the role
      setAuth(true);
      navigate(response.data.role === 'admin' ? '/admin/employees' : '/home');
    } catch (err) {
      setError('Invalid credentials');
    }
  };
  

  return (
    <div className="login-page">
      <Container maxWidth="xs">
        <Paper elevation={3} className="login-card">
          <Typography variant="h4" className="login-title">Welcome to Job-Portal</Typography>
          {error && <Typography color="error" align="center">{error}</Typography>}
          <Box mt={2}>
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              margin="normal"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handleLogin}
              style={{ marginTop: '1rem' }}
            >
              Login
            </Button>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};

export default Login;
