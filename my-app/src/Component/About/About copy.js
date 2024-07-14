// src/components/Footer.js
import React from 'react';
import { Container, Typography, Box, IconButton } from '@mui/material';
import { LinkedIn, GitHub, Twitter } from '@mui/icons-material';

function Footer() {
  return (
    <Box className="bg-gray-900 text-gray-400 py-4">
      <Container maxWidth="lg">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body1">
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
          </Typography>
          <Box>
            <IconButton href="https://www.linkedin.com" target="_blank" className="text-gray-400">
              <LinkedIn />
            </IconButton>
            <IconButton href="https://github.com" target="_blank" className="text-gray-400">
              <GitHub />
            </IconButton>
            <IconButton href="https://twitter.com" target="_blank" className="text-gray-400">
              <Twitter />
            </IconButton>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;
