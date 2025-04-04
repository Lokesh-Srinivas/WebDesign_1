// Layout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Typography} from '@mui/material';
import Navbar from './Navbar';
import './Layout.css';

const Layout = ({ isAuthenticated, logout }) => {
 // const navigate = useNavigate();

  // const handleLogout = () => {
  //   logout();
  //   navigate('/login');
  // };

  return (
    <div className="layout-container">
      {/* Header */}
      <Navbar isAuthenticated={isAuthenticated} logout={logout} />

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
