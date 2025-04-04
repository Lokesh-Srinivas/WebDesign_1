import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

const Navbar = ({ isAuthenticated, logout }) => {
  const [role, setRole] = useState('');

  useEffect(() => {
    const storedRole = localStorage.getItem('role'); // Get the role from local storage
    setRole(storedRole); // Set it in state
  }, [isAuthenticated]);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Job Portal
        </Typography>

        {/* Show admin-related pages only if role is 'admin' */}
        {role === 'admin' ? (
          <>
            <Button color="inherit" component={Link} to="/admin/employees">
              Employees
            </Button>
            <Button color="inherit" component={Link} to="/admin/add-job">Add Job</Button>

          </>
        ) : (
          // Show other pages for non-admin users
          <>
            <Button color="inherit" component={Link} to="/home">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/about">
              About
            </Button>
            <Button color="inherit" component={Link} to="/jobs">
              Jobs
            </Button>
            <Button color="inherit" component={Link} to="/contact">
              Contact
            </Button>
            <Button color="inherit" component={Link} to="/companies">
              Companies
            </Button>
          </>
        )}

        {/* Login/Logout Button */}
        {isAuthenticated ? (
          <Button color="inherit" onClick={logout}>
            Logout
          </Button>
        ) : (
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
