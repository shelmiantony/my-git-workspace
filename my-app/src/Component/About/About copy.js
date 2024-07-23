import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  Grid,
} from "@mui/material";
import Game from "../TicTacToe/Game";
import Todo from "../ToddoApp/Toddo";

function Project() {
  return (
    <Container
      maxWidth="lg"
      className="py-20"
      style={{ backgroundColor: "#F4ECE6" }}
    >
      <Box py={6} textAlign="center">
        <Typography
          variant="h3"
          component="h1"
          className="mb-10 font-medium text-gray-900"
        >
          Projects
        </Typography>
      </Box>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box textAlign="center" mb={2}>
                <Typography variant="h5" component="h2">
                  Toddo App
                </Typography>
              </Box>
              <Todo />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Box textAlign="center" mb={2}>
                <Typography variant="h5" component="h2">
                  Tic Tac Toe Game
                </Typography>
              </Box>
              <Game />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Project;
