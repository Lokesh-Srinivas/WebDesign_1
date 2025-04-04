import React from 'react';
import { Container, Typography, Box } from '@mui/material';

const About = () => (
  <Container>
    <Box py={5}>
      <Typography variant="h4" gutterBottom>About Us</Typography>
      <Typography variant="body1" color="textSecondary" paragraph>
        Our Job Portal is committed to helping job seekers find opportunities that match their skills, aspirations, and goals. 
        We partner with leading companies to bring you the best job listings and career opportunities.
      </Typography>
      <Typography variant="body1" color="textSecondary" paragraph>
        Our mission is to connect talented individuals with companies that value their skills and potential. Join us in our journey to transform the job search experience!
      </Typography>
    </Box>
  </Container>
);

export default About;
