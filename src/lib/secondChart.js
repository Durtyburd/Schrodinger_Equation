import Plotly from "plotly.js-dist-min";
import { thirdChart } from "./thirdChart.js";
import { getMaxValue } from "./getMaxValue.js";

///////////////////////////////////////////////////////////////////////////////////////
function secondChart(q1) {
  const xArr1 = [];
  const yArr1 = [];
  const xArr2 = [];
  const yArr2 = [];
  const firstFrames = [];

  for (let nn = 0; nn < q1.tt; nn++) {
    q1.fdtdUpdate();
    if (nn % 50 === 0) {
      // Wave // they should only iterate 219 times
      //   xArr1.push(q1.lx / q1.angstromStar);
      //   yArr1.push(q1.psimag / getMaxValue(q1.psimag));
      xArr1.push(q1.lx.map((value) => value / q1.angstromStar));
      yArr1.push(q1.psimag.map((value) => value / getMaxValue(q1.psimag)));

      // Barrier // they should only iterate 219 times
      //   xArr2.push(q1.lx[nn] / q1.angstromStar);
      //   yArr2.push(q1.Vx[nn] / getMaxValue(q1.Vx));
      xArr2.push(q1.lx.map((value) => value / q1.angstromStar));
      yArr2.push(q1.Vx.map((value) => value / getMaxValue(q1.Vx)));
    }
  }
  ///////////////////////////////////////////////////////////////////////////////////////////

  // frames for animation
  for (let i = 0; i < xArr1.length; i++) {
    firstFrames.push({
      data: [
        {
          x: [...xArr1[i]],
          y: [...yArr1[i]],
        },
      ],
    });
  }
  const finalFrames = [...firstFrames];
  console.log(finalFrames);

  // traces for fixed lines
  const trace1 = {
    x: [],
    y: [],
    line: {
      color: "black",
    },
    name: "|Ψ|^2",
  };

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
    title: "Schrödinger Solution",
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
    Plotly.animate("chart2", finalFrames, {
      color: "black",
      frame: { duration: 10 },
      transition: { duration: 1000 },
      mode: "immediate",
    });
  });

  // Renders final chart immediately
  thirdChart(q1);
}

export { secondChart };
