import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import Projects from "../Projects/Project";
import About from "../About/About";
function Navbar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#4CAF50" }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Shelmi K.A/React Developer
        </Typography>
        <Button component={Link} to="/About" color="inherit">
          About Me
        </Button>
        <Button component={Link} to="/Resume" color="inherit">
         Resume
        </Button>
        <Button component={Link} to="/Projects" color="inherit">
         Projects
        </Button>
        <Button component={Link} to="/Contact" color="inherit">
          Contact
        </Button>
        {/* <Button component={Link} to="/sample" color="inherit">
         Sample
        </Button> */}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
