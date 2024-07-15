import { Container, Typography } from "@mui/material";
import React from "react";

function Resume() {
  return (
    <div maxWidth="lg" className="py-20 bg-pink-100">
      <Typography
        variant="h3"
        className="text-center text-gray-900 font-medium mb-10">
        Resume
      </Typography>
      <Typography
        variant="body1"
        className="text-center justify-between text-gray-900 font-medium mb-10 py-5 px-10 md:px-8">
        To achieve a challenging position in a professional organization
                through self-improvement by excelling in all responsibilities
                with sincere hard work, dedication & commitment. To work towards
                the development of the organization & grow with it.
      </Typography>
      
    </div>
  );
}

export default Resume;
