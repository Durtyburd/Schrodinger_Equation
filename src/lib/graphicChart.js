import Plotly from "plotly.js-dist-min";
import { finalWaveFunction } from "./finalWaveFunction.js";
import { getMaxValue } from "./getMaxValue.js";
import { round } from "mathjs";

let tstr = 0;
const xArr1 = [];
const yArr1 = [];
const xArr2 = [];
const yArr2 = [];

// frames for animation
const frames = [];

///////////////////////////////////////////////////////////////////////////////////////
function graphicChart(q1) {
  for (let nn = 0; nn < q1.tt; nn++) {
    q1.fdtdUpdate();
    if (nn % 50 === 0) {
      tstr = "Time = " + String(round(nn * q1.dt * 1e15, 4)) + " fs";

      // Wave
      xArr1.push(q1.lx[nn] / q1.angstromStar);
      yArr1.push(q1.psimag[nn] / getMaxValue(q1.psimag));

      // Barrier
      xArr2.push(q1.lx[nn] / q1.angstromStar);
      yArr2.push(q1.Vx[nn] / getMaxValue(q1.Vx));
    }
  }
  console.log(yArr2);
  ///////////////////////////////////////////////////////////////////////////////////////////

  //   for (let i = 0; i < q1.tt; i++) {
  //     frames.push({
  //       data: [
  //         {
  //           x: [xArr1[i]],
  //           y: [yArr1[i]],
  //         },
  //       ],
  //     });
  //   }

  const trace1 = {
    x: [...xArr1],
    y: [...yArr1],
    line: {
      color: "black",
    },
    name: "|Ψ|^2",
  };

  const trace2 = {
    x: [...xArr2],
    y: [...yArr2],
    line: {
      color: "purple",
    },
    name: "barrier",
  };

  // Chart data
  const data = [trace1, trace2];

  // Chart layout
  const layout = {
    title: tstr,
    displayModeBar: false, // Remove the mode bar
    font: { size: 18 },
    xaxis: {
      title: "position (Å)",
      range: [],
      fixedrange: true,
      tickcolor: "black",
      color: "black",
      automargin: true,
    },
    yaxis: {
      title: "normalized magnitude",
      range: [0, 1],
      tickcolor: "black",
      zerolinecolor: "#ededeb",
      color: "black",
      automargin: true,
    },
    plot_bgcolor: "#ededeb",
    paper_bgcolor: "#ededeb",
  };

  // Create the initial graph
  Plotly.newPlot("chart2", data, layout, {
    responsive: true,
  }).then(function () {
    // Animate the graph
    // Plotly.animate("chart2", frames, {
    //   color: "black",
    //   frame: { duration: 50 },
    //   transition: { duration: 1000 },
    //   mode: "immediate",
    // });
  });

  // Renders final chart immediately
  finalWaveFunction(q1);
}

export { graphicChart };
