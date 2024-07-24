import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import React from "react";

function Navbar() {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  };
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#FFFFFF" }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, color: "#000000" }} // Set font color to black
        >
          <span style={{ fontWeight: 700, fontSize: "1.5rem" }}>
            Shelmi K.A
          </span>
          <span>{" / "}</span>

          <span style={{ fontWeight: 400, fontSize: "1rem" }}>
            React Developer
          </span>
        </Typography>
        <Button
          component={Link}
          to="/About"
          sx={{ color: isActive("/About") ? "#0050FF" : "#000000" }} // Set font color to black
        >
          About Me
        </Button>
        <Button
          component={Link}
          to="/Resume"
          sx={{ color: isActive("/Resume") ? "#0050FF" : "#000000" }} // Set font color to black
        >
          Resume
        </Button>
        <Button
          component={Link}
          to="/Projects"
          sx={{ color: isActive("/Projects") ? "#0050FF" : "#000000" }} // Set font color to black
        >
          Projects
        </Button>
        <Button
          component={Link}
          to="/Contact"
          sx={{ color: isActive("/Contact") ? "#0050FF" : "#000000" }} // Set font color to black
        >
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
