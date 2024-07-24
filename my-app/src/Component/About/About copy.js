import React from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  Card,
  CardContent,
  Avatar,
  IconButton,
  Grid,
  Paper,
} from "@mui/material";
import { LinkedIn, GitHub, Twitter } from "@mui/icons-material";
import Profile from "../../Assets/Profile.jpg";

function About() {
  return (
    <Container>
      <Paper sx={{ p: 4 }}>
        <Grid container spacing={4}>
          <Grid item md={6} xs={12}>
            <Box display="flex" flexDirection="column" alignItems="center" mb={4}>
              <Card
                sx={{
                  backgroundColor: "#F4ECE6",
                  width: "100%",
                  maxWidth: "500px",
                  padding: 2,
                }}
              >
                <CardContent sx={{ textAlign: 'center' }}>
                  <img
                    src={Profile}
                    alt="Profile"
                    style={{
                      width: "100px",
                      height: "100px",
                      marginBottom: "16px",
                      borderRadius: "50%",
                    }}
                  />
                  <Typography
                    variant="h4"
                    component="h1"
                    sx={{
                      color: "#000000",
                      fontWeight: 'bold',
                      marginBottom: '8px',
                      textDecoration: 'underline',
                      textDecorationThickness: '4px',
                    }}
                  >
                    Shelmi K A
                  </Typography>
                  <Typography
                    variant="h6"
                    component="h3"
                    sx={{ color: "#000000", fontWeight: 'light', marginBottom: '16px' }}
                  >
                    React.Js Developer
                  </Typography>
                  <Box display="flex" justifyContent="center" spacing={2}>
                    <IconButton
                      href="https://www.linkedin.com"
                      target="_blank"
                      sx={{ color: "#000000" }}
                    >
                      <LinkedIn />
                    </IconButton>
                    <IconButton
                      href="https://github.com"
                      target="_blank"
                      sx={{ color: "#000000" }}
                    >
                      <GitHub />
                    </IconButton>
                    <IconButton
                      href="https://twitter.com"
                      target="_blank"
                      sx={{ color: "#000000" }}
                    >
                      <Twitter />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box display="flex" flexDirection="column" alignItems="center" textAlign="center">
              <Typography
                variant="h2"
                component="h1"
                sx={{
                  mb: 4,
                  fontWeight: 'extrabold',
                  color: 'gray.900',
                  fontSize: '5rem',
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                Hello
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 4,
                  fontWeight: 'bold',
                  color: 'gray.900',
                  textAlign: { xs: 'center', md: 'left' },
                }}
              >
                Here's who I am & what I do
              </Typography>
              <Box display="flex" justifyContent="center" gap={2} mb={4}>
                <Button href="/resume" variant="contained" color="primary">
                  Resume
                </Button>
                <Button href="/projects" variant="contained" color="secondary">
                  Projects
                </Button>
              </Box>
              <Typography
                variant="body1"
                component="p"
                sx={{ color: 'gray.600', textAlign: { xs: 'center', md: 'left' } }}
              >
                To achieve a challenging position in a professional organization
                through self-improvement by excelling in all responsibilities
                with sincere hard work, dedication & commitment. To work towards
                the development of the organization & grow with it.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default About;
