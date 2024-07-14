import React from 'react';
import { Container, Typography, Box, Button, Card, CardContent, Avatar, IconButton, Grid, Paper } from '@mui/material';
import { LinkedIn, GitHub, Twitter } from '@mui/icons-material';
import Profile from '../../Assets/Profile.jpg';

function About() {
  return (
    <section id='about' className='text-gray-900 py-20' style={{ backgroundColor: '#F4ECE6' }}>
      <Container>
        <Paper style={{ padding: '20px', backgroundColor: '#F4ECE6' }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Box className='flex flex-col items-center'>
                <Card className='bg-gray-800'>
                  <CardContent className='flex flex-col items-center'>
                    <Avatar src={Profile} alt='Profile' className='w-32 h-32 mb-4 rounded-full' />
                    <Typography variant='h4' component='h1' className='text-white mb-2'>
                      Hi, I'm Shelmi
                    </Typography>
                    <Box className='flex justify-center space-x-4 mb-4'>
                      <IconButton href='https://www.linkedin.com' target='_blank' className='text-white'>
                        <LinkedIn />
                      </IconButton>
                      <IconButton href='https://github.com' target='_blank' className='text-white'>
                        <GitHub />
                      </IconButton>
                      <IconButton href='https://twitter.com' target='_blank' className='text-white'>
                        <Twitter />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box className='flex-grow flex flex-col items-center md:items-start text-center md:text-left'>
                <Typography variant='h3' component='h1' className='mb-4 font-medium text-gray-900'>
                  About Me
                </Typography>
                <Typography variant='body1' component='p' className='mb-8 leading-relaxed text-gray-600'>
                  To achieve a challenging position in a professional organization through self-improvement by excelling in all responsibilities with sincere hard work, dedication & commitment. To work towards the development of the organization & grow with it.
                </Typography>
                <Box className='flex justify-center md:justify-start space-x-4'>
                  <Button href='#resume' variant='contained' color='primary'>
                    Resume
                  </Button>
                  <Button href='#projects' variant='contained' color='secondary'>
                    See My Projects
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </section>
  );
}

export default About;
