import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid
} from "@mui/material";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";
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
      degree: "B.Tech. in Electronics and Communications Engineering",
      institution: "Calicut University",
      duration: "2015 - 2018",
    },
    {
      degree: "Diploma in Electronics and Communications Engineering",
      institution: "State Board of Technical Education",
      duration: "2012 - 2015",
    },
  ];

  return (
    <Container
      maxWidth="lg"
      className="py-20"
      style={{ backgroundColor: "#F4ECE6" }}>
      <Box py={6} textAlign="center">
        <Typography
          variant="h3"
          component="h1"
          className="mb-10 font-medium text-gray-900">
          Resume
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Experience experience={experience} />
        </Grid>
        <Grid item xs={12}>
          <Education education={education} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Resume;
