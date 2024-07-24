import React from "react";
import { Card, CardContent, Grid, Typography, Box } from "@mui/material";

const ExperienceSection = ({ education }) => {
  return (
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={6}>
        <Typography
          variant="h5"
          component="h2"
          className="mb-4 font-bold text-gray-800">
          Education
        </Typography>
      </Grid>

      {education.map((edu, index) => (
        <Grid item xs={12} md={12} key={index}>
          <Box display="flex" justifyContent="center" mb={4}>
            <Card
              className="bg-gray-200"
              style={{ maxWidth: "600px", width: "100%" }}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography
                      variant="body1"
                      className=" font-bold"
                      style={{ color: "#0050FF", fontWeight: "800" }}>
                      {edu.duration}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1" className="text-gray-900">
                      {""}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant="body1"
                      className="text-gray-700 font-semibold">
                      University:
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
                      Degree:
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1" className="text-gray-900">
                      {edu.degree}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default ExperienceSection;
