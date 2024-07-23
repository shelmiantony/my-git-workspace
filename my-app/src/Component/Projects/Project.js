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
import Game from "../TicTacToe/Game";
import Todo from "../ToddoApp/Toddo";
function Project() {
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
          Project
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12}>
        <Box display='flex'justifyContent='center' mb={4}>
          <Card className="bg-gray-200" style={{ maxWidth: '600px', width: '100%' }}>
            <CardContent>
      
            <Typography variant="h5">
Toddo App:
            </Typography>
          <Game />
     
          </CardContent>
          </Card>
          </Box>
        </Grid>
        <Grid item xs={12}>
        <Box display='flex'justifyContent='center' mb={4}>
          <Card>
            <CardContent>
            <Todo />
            </CardContent>
          </Card>
          
          </Box>
         
        </Grid>
      </Grid>
    </Container>
  );
}

export default Project;
