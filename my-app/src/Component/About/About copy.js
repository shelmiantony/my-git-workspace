import React from 'react';
import { Container, Typography, Card, CardContent, Box, Grid, Button } from '@mui/material';
import Profile from '../../Assets/Profile.jpg';

function Resume() {
  const experience = [
    {
      title: "Software Engineer",
      company: "Citrus Informatics Private Limited",
      duration: "2021 - Present",
      description: "Worked on various projects using React, Redux, and other modern web technologies.",
    },
    {
      title: "Junior Developer",
      company: "Some Company",
      duration: "2019 - 2021",
      description: "Assisted in the development of web applications and worked on front-end features.",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Some University",
      duration: "2015 - 2019",
      description: "Graduated with honors and specialized in software development and algorithms.",
    },
  ];

  return (
    <Container maxWidth="lg" className="py-20">
      <Typography variant="h3" component="h1" className="mb-10 font-medium text-gray-900">
        Resume
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Typography variant="h4" component="h2" className="mb-4 font-semibold text-gray-800">
            Experience
          </Typography>
        </Grid>
        {experience.map((job, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card className="bg-gray-200">
              <CardContent>
                <Typography variant="h5" component="h3" className="text-gray-900">
                  {job.title}
                </Typography>
                <Typography variant="body1" className="text-gray-700">
                  {job.company}
                </Typography>
                <Typography variant="body2" className="text-gray-600">
                  {job.duration}
                </Typography>
                <Typography variant="body2" className="text-gray-600">
                  {job.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Typography variant="h4" component="h2" className="mb-4 font-semibold text-gray-800">
            Education
          </Typography>
        </Grid>
        {education.map((edu, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card className="bg-gray-200">
              <CardContent>
                <Typography variant="h5" component="h3" className="text-gray-900">
                  {edu.degree}
                </Typography>
                <Typography variant="body1" className="text-gray-700">
                  {edu.institution}
                </Typography>
                <Typography variant="body2" className="text-gray-600">
                  {edu.duration}
                </Typography>
                <Typography variant="body2" className="text-gray-600">
                  {edu.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
        <Grid item xs={12}>
          <Box className="flex justify-center md:justify-start space-x-4">
            <Button
              href="/path/to/your/cv.pdf"
              download
              variant="contained"
              color="primary"
            >
              Download CV
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Resume;
