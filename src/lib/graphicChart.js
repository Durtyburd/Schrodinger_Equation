import Plotly from "plotly.js-dist-min";
import { finalWaveFunction } from "./finalWaveFunction.js";
import { getMaxValue } from "./getMaxValue.js";

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
      // Wave // they should only iterate 219 times - nn is a placeholder but it should be something else
      //   xArr1.push(q1.lx / q1.angstromStar);
      //   yArr1.push(q1.psimag / getMaxValue(q1.psimag));
      xArr1.push(q1.lx.map((value) => value / q1.angstromStar));
      yArr1.push(q1.psimag.map((value) => value / getMaxValue(q1.psimag)));

      // Barrier // they should only iterate 219 times - nn is a placeholder but it should be something else
      //   xArr2.push(q1.lx[nn] / q1.angstromStar);
      //   yArr2.push(q1.Vx[nn] / getMaxValue(q1.Vx));
      xArr2.push(q1.lx.map((value) => value / q1.angstromStar));
      yArr2.push(q1.Vx.map((value) => value / getMaxValue(q1.Vx)));
    }
  }
  ///////////////////////////////////////////////////////////////////////////////////////////

  for (let i = 0; i < xArr1.length; i++) {
    frames.push({
      data: [
        {
          x: [...xArr1[i]],
          y: [...yArr1[i]],
        },
      ],
    });
  }

  const trace1 = {
    x: [],
    y: [],
    line: {
      color: "black",
    },
    name: "|Ψ|^2",
  };

  //   console.log("xarr: ", xArr1[0]);
  //   console.log("yarr: ", yArr1[0]);
  const trace2 = {
    x: [...xArr2[0]],
    y: [...yArr2[0]],
    line: {
      color: "purple",
    },
    name: "barrier",
  };

  // Chart data
  const data = [trace1, trace2];

  // Chart layout
  const layout = {
    title: "Time",
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
    Plotly.animate("chart2", frames, {
      color: "black",
      frame: { duration: 10 },
      transition: { duration: 1000 },
      mode: "immediate",
    });
  });

  // Renders final chart immediately
  finalWaveFunction(q1);
}

export { graphicChart };
