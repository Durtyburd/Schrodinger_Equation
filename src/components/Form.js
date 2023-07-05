import React, { useState, useRef } from "react";
import { TextField, Box, Typography } from "@mui/material";
import { handleClick } from "../lib/handleClick.js";

function Form() {
  function scroll() {
    if (stateV0 == 0 || statebw == 0 || stateke == 0 || statesig == 0) {
      alert("Please input values.");
    } else {
      ref.current?.scrollIntoView({ behavior: "smooth" });
    }
  }
  const ref = useRef(null);

  // State for user-inputted wave variables
  const [stateV0, setStateV0] = useState(0);
  const [statebw, setStatebw] = useState(0);
  const [statesig, setStatesig] = useState(0);
  const [stateke, setStateke] = useState(0);

  return (
    <div style={{ marginTop: "1%" }}>
      <h2 align="center">Create your own wave function</h2>
      <form
        display="flex"
        //On submit calls the handleClick function to begin wave rendering process
        onSubmit={(e) => {
          e.preventDefault();
          handleClick(stateV0, statebw, statesig, stateke);
        }}
        align="center"
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TextField
            type="text"
            variant="outlined"
            color="primary"
            label="Height of potential barrier (J)"
            sx={{ margin: "1% 1% 1% 1%" }}
            onChange={(e) => {
              if (
                (e.target.value > -1 && e.target.value <= 10e13) ||
                e.target.value === "."
              ) {
                setStateV0(e.target.value);
              } else {
                alert(
                  "Please input a value between 1 and 100,000,000,000,000, but not 0."
                );
                e.target.value = 1;
              }
            }}
            required
          />
          <TextField
            type="text"
            variant="outlined"
            color="primary"
            label="Potential barrier width (m)"
            sx={{ margin: "1% 1% 1% 1%" }}
            onChange={(e) => {
              if (
                (e.target.value > -1 && e.target.value <= 10e13) ||
                e.target.value === "."
              ) {
                setStatebw(e.target.value);
              } else {
                alert(
                  "Please input a value between 0 and 100,000,000,000,000, but not 0."
                );
                e.target.value = 1;
              }
            }}
            required
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TextField
            type="text"
            variant="outlined"
            color="primary"
            label="Initial spread of Gaussian wavefunction"
            sx={{ margin: "1% 1% 1% 1%" }}
            onChange={(e) => {
              if (
                (e.target.value > -1 && e.target.value <= 10e13) ||
                e.target.value === "."
              ) {
                setStatesig(e.target.value);
              } else {
                alert(
                  "Please input a value between 0 and 100,000,000,000,000, but not 0."
                );
                e.target.value = 1;
              }
            }}
            required
          />
          <TextField
            type="text"
            variant="outlined"
            color="primary"
            label="Kinetic energy of electron (J)"
            sx={{ margin: "1% 1% 1% 1%" }}
            onChange={(e) => {
              if (
                (e.target.value >= -1 && e.target.value <= 10e13) ||
                e.target.value === "."
              ) {
                setStateke(e.target.value);
              } else {
                alert(
                  "Please input a value between 0 and 100,000,000,000,000, but not 0."
                );
                e.target.value = 0.1;
              }
            }}
            required
          />
        </Box>
        <Box align="center">
          <button
            onClick={scroll}
            color="primary"
            type="submit"
            style={{
              alignSelf: "center",
              marginTop: "1%",
              marginBottom: "1%",
            }}
          >
            Generate
          </button>
        </Box>
      </form>
    </div>
  );
}

export { Form };
