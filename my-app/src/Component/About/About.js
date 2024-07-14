import { Container, Typography, Box, Button } from '@mui/material';
import Profile from '../../Assets/Profile.jpg';
// ./src/Assets/Profile.jp
import React from 'react';

function About() {
  return (
    <section id='about' className='text-white bg-gray-900 py-20'>
      <Container className='flex flex-col md:flex-row items-center'>
        <Box className='flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
          <Typography variant='h3' component='h1' className='mb-4 font-medium text-white'>
            Hi, I'm Shelmi
          </Typography>
          <Typography variant='body1' component='p' className='mb-8 leading-relaxed text-gray-400'>
            To achieve a challenging position in a professional organization through self-improvement by excelling in all responsibilities with sincere hard work, dedication & commitment. To work towards the development of the organization & grow with it.
          </Typography>
          <Box className='flex justify-center space-x-4'>
            <Button href='#experience' variant='contained' color='primary'>
              Experience
            </Button>
            <Button href='#projects' variant='contained' color='secondary'>
              See My Own Projects
            </Button>
          </Box>
        </Box>
        <Box className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
          <img  className='rounded-full w-32 h-32 object-cover object-center'
             
             alt='hero' src={Profile} />
        </Box>
      </Container>
    </section>
  );
}

export default About;
