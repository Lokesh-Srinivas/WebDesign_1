import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const Contact = () => (
  <Container>
    <Box py={5}>
      <Typography variant="h4" gutterBottom>Contact Us</Typography>
      <TextField fullWidth label="Name" margin="normal" />
      <TextField fullWidth label="Email" margin="normal" />
      <TextField fullWidth label="Message" multiline rows={4} margin="normal" />
      <Button variant="contained" color="primary">Send Message</Button>
    </Box>
  </Container>
);

export default Contact;
