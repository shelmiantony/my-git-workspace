import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  Grid,
  Button,
} from "@mui/material";
import Profile from "../../Assets/Profile.jpg";
import Experience from "../Experience/Experience";
function Resume() {
  const experience = [
    {
      title: "Software Engineer",
      company: "Citrus Informatics Private Limited",
      duration: "2021 - Present",
      description: `Experience in developing the front end of applications with ReactJS, React Hooks, and Redux.
     Material UI framework and charting libraries such as Chart.js, Highcharts, ApexCharts, and Cube.js.
     `,
    },
    {
      title: "Developer Trainee",
      company: "SRV Infotech, Kannur",
      duration: "Sep 2021 - Oct 2021",
      description: `API creation using Node, MongoDB,
Express Webpage designing using React.JS Integration using Redux Saga`,
    },
    {
      title: "Intern",
      company: "Websoullabs, Cochin",
      duration: "Apr 2021 - Sep 2021",
      description: `Created Reactjs Websites by using UIKIT, MaterialUI, Bootstrap & SemanticUI.
Build backend using NodeJs.
Knowledge in CRUD.
Knowledge in Express & MongoDB. `,
    },
    {
      title: "HFC Engineer",
      company: "IMMCO, Inc, Cochin",
      duration: "Dec 2018 - Feb 2021",
      description: `Experience on Multiple technologies like FTTp, HFC and FTTc. Hands
on Experience on MapInfo, AutoCAD and SpatialNet
`,
    },
    {
      title: "Intern",
      company: "OBM Worldwide Technology Services LLP, Koraty",
      duration: "May 2018 - Sep 2018",
      description: `Internship as Java Developer
`,
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Some University",
      duration: "2015 - 2019",
      description:
        "Graduated with honors and specialized in software development and algorithms.",
    },
  ];

  return (
    <Container maxWidth="lg" className="py-20">
      <Typography
        variant="h3"
        component="h1"
        className="mb-10 font-medium text-gray-900">
        Resume
      </Typography>
      <Grid container spacing={4}>
       
        <Grid item xs={12}>
          <Experience experience={experience} />
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h4"
            component="h2"
            className="mb-4 font-semibold text-gray-800">
            Education
          </Typography>
        </Grid>
        {education.map((edu, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card className="bg-gray-200">
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography
                      variant="body1"
                      className="text-gray-700 font-semibold">
                      Degree:
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1" className="text-gray-900">
                      {edu.degree}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant="body1"
                      className="text-gray-700 font-semibold">
                      Institution:
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1" className="text-gray-900">
                      {edu.institution}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant="body1"
                      className="text-gray-700 font-semibold">
                      Duration:
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1" className="text-gray-900">
                      {edu.duration}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant="body1"
                      className="text-gray-700 font-semibold">
                      Description:
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1" className="text-gray-900">
                      {edu.description}
                    </Typography>
                  </Grid>
                </Grid>
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
              color="primary">
              Download CV
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Resume;
