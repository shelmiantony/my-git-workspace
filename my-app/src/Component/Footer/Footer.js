import { Box, Typography, IconButton, Container, Grid } from "@mui/material";
import React from "react";
import { LinkedIn, GitHub, Twitter } from "@mui/icons-material";

function Footer() {
  return (
    <Box sx={{ backgroundColor: "#FFFFFF", py: 2 }}>
      <Container maxWidth="lg">
        <Grid container justifyContent={"space-between"} alignItems={"center"}>
          <Grid item>
            <Typography variant="body1">
              @{new Date().getFullYear()} My Portfolio. All rights reserved.
            </Typography>
          </Grid>
          <Grid item>
            <Box>
              <IconButton
                href="https://www.linkedin.com"
                target="_blank"
                className="bg-gray-900 text-gray-400 py-4">
                <LinkedIn />
              </IconButton>
              <IconButton
                href="https://github.com"
                target="_blank"
                className="text-gray-400">
                <GitHub />
              </IconButton>
              <IconButton
                href="https://twitter.com"
                target="_blank"
                className="text-gray-400">
                <Twitter />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
