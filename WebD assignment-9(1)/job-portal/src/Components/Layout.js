import React from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import './Layout.css';

const Layout = ({ isAuthenticated, logout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="layout-container">
      {/* Header */}
      <AppBar position="static" style={{ backgroundColor: '#1565c0' }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>Job Portal</Link>
          </Typography>
          <Button color="inherit" component={Link} to="/home">Home</Button>
          <Button color="inherit" component={Link} to="/about">About</Button>
          <Button color="inherit" component={Link} to="/jobs">Jobs</Button>
          <Button color="inherit" component={Link} to="/contact">Contact</Button>
          <Button color="inherit" component={Link} to="/companies">Companies</Button>
          {isAuthenticated ? (
            <Button color="inherit" onClick={handleLogout}>Logout</Button>
          ) : (
            <Button color="inherit" component={Link} to="/login">Login</Button>
          )}
        </Toolbar>
      </AppBar>

      {/* Page content */}
      <Container className="my-4">
        <Outlet />
      </Container>

      {/* Footer */}
      <footer className="footer">
        <Container>
          <Typography variant="body2" color="inherit" align="center">
            &copy; {new Date().getFullYear()} Job Portal. All rights reserved.
          </Typography>
        </Container>
      </footer>
    </div>
  );
};

export default Layout;
