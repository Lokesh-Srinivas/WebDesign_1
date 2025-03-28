import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file

const Home = () => (
  <Container>
    {/* Hero Section */}
    <Box className="hero-section">
      <Typography variant="h2" gutterBottom>Welcome to the Job Portal</Typography>
      <Typography variant="h5" paragraph>
        Discover amazing job opportunities and connect with top companies.
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/jobs">
        Browse Jobs
      </Button>
    </Box>

    {/* Quick Stats Section */}
    <Box className="quick-stats">
      <div className="stat-card">
        <Typography variant="h4">500+</Typography>
        <Typography variant="subtitle1">Job Listings</Typography>
      </div>
      <div className="stat-card">
        <Typography variant="h4">120+</Typography>
        <Typography variant="subtitle1">Top Companies</Typography>
      </div>
      <div className="stat-card">
        <Typography variant="h4">1,000+</Typography>
        <Typography variant="subtitle1">Active Users</Typography>
      </div>
    </Box>

    {/* Featured Companies Section */}
    <Box className="featured-companies">
      <Typography variant="h5" gutterBottom>Featured Companies</Typography>
      <div className="company-logos">
        <img src="/pics/ernstandyoung.jpeg" alt="Company 1" />
        <img src="/pics/vertex_pharma.jpeg" alt="Company 2" />
        <img src="/pics/walmart.jpeg" alt="Company 3" />
        <img src="/pics/sharkninja.jpeg" alt="Company 4" />
      </div>
    </Box>
  </Container>
);

export default Home;
