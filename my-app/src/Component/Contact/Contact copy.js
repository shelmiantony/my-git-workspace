import React from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  Box,
  TextField,
  Button
} from "@mui/material";

const ExperienceSection = ({ education }) => {
  return (
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={6}>
        <Typography
          variant="h5"
          component="h2"
          className="mb-4 font-bold text-gray-800">
          Contact
        </Typography>
      </Grid>

      <Grid item xs={12} md={12}>
        <Box display="flex" justifyContent="center" mb={4}>
          <Card
            className="bg-gray-200"
            style={{ maxWidth: "600px", width: "100%" }}>
            <CardContent>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    required
                    label="First Name"
                    name="fstname"
                    id="standard-basic"
                    variant="standard"
                    autoComplete="fstname"></TextField>
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    required
                     id="standard-basic"
                    variant="standard"
                    label="last Name"
                    name="lname"
                    autoComplete="lname">
                    
                  </TextField>
                </Grid>
                <Grid item  xs={12} md={12}>
                <TextField
                    required
                    fullWidth
                     id="standard-basic"
                    variant="standard"
                    label="Email"
                    name="email"
                    autoComplete="email">
                    
                  </TextField>
                </Grid>
                <Grid item  xs={12} md={12}>
                <TextField
                    required
                    fullWidth
                     id="standard-basic"
                    variant="standard"
                    label="Subject"
                    name="subject"
                    autoComplete="subject">
                    
                  </TextField>
                </Grid>
                <Grid item  xs={12} md={12}>
                <TextField
                    required
                    fullWidth
                     id="standard-basic"
                    variant="standard"
                    label="Message"
                    name="message"
                    autoComplete="message">
                    
                  </TextField>
                </Grid>
                <Grid item xs={6}>
               <Button variant="contained"
            color="primary">Send</Button>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ExperienceSection;
