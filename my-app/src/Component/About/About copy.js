import React from 'react';
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
} from '@mui/material';

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = data.get('name');
    const email = data.get('email');
    const message = data.get('message');
    // Handle form submission here (e.g., send data to your email or backend)
    console.log({ name, email, message });
  };

  return (
    <Container maxWidth="md" style={{ backgroundColor: "#F4ECE6", padding: "2rem", borderRadius: "8px" }}>
      <Box py={4} textAlign="center">
        <Typography variant="h4" component="h1">
          Contact Me
        </Typography>
      </Box>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              id="message"
              label="Message"
              name="message"
              multiline
              rows={4}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Send Message
        </Button>
      </Box>
    </Container>
  );
}

export default Contact;
