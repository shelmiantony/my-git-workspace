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

const Contact = () => {
  return (
    <div style={{ backgroundColor: "#F4ECE6" }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center" mb={4} >
            <Typography
              variant="h2"
              component="h1"
              sx={{ 
                mb: 4, 
                color: 'gray.900', 
                 pt: 4,  // Adjust the padding top value here
                fontSize: '2.5rem', // Adjust size as needed
                fontWeight: 600 // Adjust thickness as needed
              }}
              align="center">
              Let's Talk
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={12} md={12}>
          <Box display="flex" justifyContent="center" mb={4}>
            <Card
              className="bg-gray-200"
              sx={{ maxWidth: "600px", width: "100%", py: 2 }}>
              <CardContent>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      required
                      label="First Name"
                      name="fstname"
                      id="standard-basic"
                      variant="standard"
                      autoComplete="fstname"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      required
                      id="standard-basic"
                      variant="standard"
                      label="Last Name"
                      name="lname"
                      autoComplete="lname"
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField
                      required
                      fullWidth
                      id="standard-basic"
                      variant="standard"
                      label="Email"
                      name="email"
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField
                      required
                      fullWidth
                      id="standard-basic"
                      variant="standard"
                      label="Subject"
                      name="subject"
                      autoComplete="subject"
                    />
                  </Grid>
                  <Grid item xs={12} md={12}>
                    <TextField
                      required
                      fullWidth
                      id="standard-basic"
                      variant="standard"
                      label="Message"
                      name="message"
                      autoComplete="message"
                    />
                  </Grid>
                  <Grid item xs={6} sx={{ pt: 2 }}>
                    <Button variant="contained" color="primary">
                      Send
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Contact;
