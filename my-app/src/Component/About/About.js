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
      <Paper>
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <Box className="flex flex-col items-center md:w-1/2 lg:pr-24 md:pr-16 mb16 md:mb-0 pt-11 ">
              <Card
                style={{
                  // padding: "20px",
                  backgroundColor: "#F4ECE6",
                  width: "500px",
                  paddingTop:'11px'
                }}>
                <CardContent className="flex flex-col items-center">
                  <img
                    src={Profile}
                    alt="Profile"
                    className="w-32 h-32 mb-4 rounded-full"
                  />
                  <Typography
                    variant="h4"
                    component="h1"
                    className="text-black font-bold underline-offset-4 mb-2">
                    Shelmi K A
                  </Typography>
                  <Typography
                    variant="h8"
                    component="h3"
                    className="text-black font-thin mb-2">
                    React.Js Developer
                  </Typography>
                  <Box className="flex justify-center space-x-4 mb-4 pt-11">
                    <IconButton
                      href="https://www.linkedin.com"
                      target="_blank"
                      className="text-black">
                      <LinkedIn />
                    </IconButton>
                    <IconButton
                      href="https://github.com"
                      target="_blank"
                      className="text-black">
                      <GitHub />
                    </IconButton>
                    <IconButton
                      href="https://twitter.com"
                      target="_blank"
                      className="text-black">
                      <Twitter />
                    </IconButton>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box className="flex-grow flex flex-col items-center md:items-start text-center md:text-left">
              <Typography
                variant="h2"
                component="h1"
                sx={{ 
                  mb: 4, 
                  fontWeight: 'extrabold', 
                  color: 'gray.900', 
                  pt: 11,
                  fontSize: '5rem', // Adjust size as needed
                  fontWeight: 800 // Adjust thickness as needed
                }}>
                Hello
              </Typography>
              <Typography
                variant="h5"
                className="mb-4  font-bold text-gray-900 pt-5">
                Here's who I am & what I do
              </Typography>
              <Box className="flex justify-center md:justify-start space-x-4 pt-11">
                <Button href="#resume" variant="contained" color="primary">
                  Resume
                </Button>
                <Button href="#projects" variant="contained" color="secondary">
                  Projects
                </Button>
              </Box>
              <Typography
                variant="body1"
                component="p"
                className="mb-8 leading-relaxed text-gray-600 pt-8 pb-7">
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
