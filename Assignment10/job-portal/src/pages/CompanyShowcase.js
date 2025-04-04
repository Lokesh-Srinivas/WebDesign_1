// src/pages/CompanyShowcase.js
import React, { useEffect, useState } from 'react';
import axios from '../axiosConfig';
import { Grid, Card, CardMedia, CardContent, Typography, Container } from '@mui/material';

const CompanyShowcase = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    // Fetch images from backend
    const fetchImages = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/images');
        setCompanies(response.data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };
    
    fetchImages();
  }, []);

  return (
    <Container maxWidth="md" style={{ marginTop: '2rem' }}>
      <Typography variant="h4" gutterBottom>Company Showcase</Typography>
      <Grid container spacing={3}>
        {companies.map((company) => (
          <Grid item xs={12} md={4} key={company.name}>
            <Card>
              <CardMedia
                component="img"
                alt={company.name}
                height="140"
                image={company.url}
                title={company.name}
              />
              <CardContent>
                <Typography variant="h6">{company.name}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CompanyShowcase;
