import React from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
  Button,
} from "@mui/material";

const ExperienceSection = ({ experience }) => {
  return (
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12} md={8}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={4}
          mx="auto"
          maxWidth="600px">
          <Typography
            variant="h5"
            component="h2"
            className="font-bold text-gray-800">
            Experience
          </Typography>
          <Button
            href="/path/to/your/cv.pdf"
            download
            variant="contained"
            color="primary">
            Download CV
          </Button>
        </Box>
      </Grid>

      {experience.map((job, index) => (
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
                      {job.duration}
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
                      Job Position:
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1" className="text-gray-900">
                      {job.title}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography
                      variant="body1"
                      className="text-gray-700 font-semibold">
                      Company:
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body1" className="text-gray-900">
                      {job.company}
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
                      {job.description}
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
