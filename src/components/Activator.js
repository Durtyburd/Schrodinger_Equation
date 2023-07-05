import React from "react";
import { Box, Typography } from "@mui/material";
import "../stylesheets/activator.css";

function Activator() {
  return (
    <>
      <Box
        align="center"
        padding="7% 0 3% 0"
        backgroundColor="#ededeb"
        z-index="99"
      >
        <Typography className="heading" variant="h2" padding="0% 0% 2% 0%">
          <strong>
            The Schrödinger <br />
            Equation
          </strong>
        </Typography>
        <Typography variant="h4" padding="0% 0% 2% 0%">
          A 1D visual representation solved by the <br />
          FDTD (finite-difference time-domain) method.
        </Typography>
        <br />
      </Box>
    </>
  );
}

export { Activator };
