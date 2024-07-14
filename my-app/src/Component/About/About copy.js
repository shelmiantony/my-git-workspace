import React from "react";
import { Button, Typography, Container, Box } from '@mui/material';

export default function About() {
  return (
    <section id="about" className="bg-gray-900 text-white py-20">
      <Container className="flex flex-col md:flex-row items-center">
        <Box className="flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <Typography variant="h3" component="h1" className="mb-4 font-medium text-white">
            Hi, I'm Reed.
            <br className="hidden lg:inline-block" />I love to build amazing apps.
          </Typography>
          <Typography variant="body1" component="p" className="mb-8 leading-relaxed text-gray-400">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui laborum quasi, incidunt dolore iste nostrum cupiditate voluptas? Laborum, voluptas natus?
          </Typography>
          <Box className="flex justify-center space-x-4">
            <Button
              href="#contact"
              variant="contained"
              color="primary"
              className="mr-4"
            >
              Work With Me
            </Button>
            <Button
              href="#projects"
              variant="contained"
              color="secondary"
            >
              See My Past Work
            </Button>
          </Box>
        </Box>
        <Box className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./coding.svg"
          />
        </Box>
      </Container>
    </section>
  );
}
