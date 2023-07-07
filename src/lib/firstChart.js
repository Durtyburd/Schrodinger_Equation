import Plotly from "plotly.js-dist-min";
import { secondChart } from "./secondChart.js";
import { getMaxValue } from "./getMaxValue.js";

function firstChart(q1) {
  const trace1xArr = [];
  const trace1yArr = [];
  const trace2xArr = [];
  const trace2yArr = [];
  const trace3xArr = [];
  const trace3yArr = [];
  const trace4xArr = [];
  const trace4yArr = [];

  for (let i = 0; i < q1.ll; i++) {
    trace1xArr.push(q1.lx[i] / q1.angstromStar);
    trace1yArr.push(q1.psimag[i] / getMaxValue(q1.psimag));
    trace2xArr.push(q1.lx[i] / q1.angstromStar);
    trace2yArr.push(q1.Vx[i] / getMaxValue(q1.Vx));
    trace3xArr.push(q1.lx[i] / q1.angstromStar);
    trace3yArr.push(q1.psii[i] / getMaxValue(q1.psii));
    trace4xArr.push(q1.lx[i] / q1.angstromStar);
    trace4yArr.push(q1.psir[i] / getMaxValue(q1.psir));
  }

  // traces for fixed lines
  const trace1 = {
    x: [...trace1xArr],
    y: [...trace1yArr],
    line: {
      color: "black",
    },
    name: "|Ψ|^2",
  };

  let trace2 = {
    x: [...trace2xArr],
    y: [...trace2yArr],
    line: {
      color: "purple",
    },
    name: "barrier",
  };

  const trace3 = {
    x: [...trace3xArr],
    y: [...trace3yArr],
    line: {
      color: "orange",
    },
    name: "𝕴[Ψ] ",
  };

  let trace4 = {
    x: [...trace4xArr],
    y: [...trace4yArr],
    line: {
      color: "green",
    },
    name: "ℜ[Ψ] ",
  };

  // Chart data
  const data = [trace1, trace2, trace3, trace4];

  // Chart layout
  const layout = {
    title: "Initial wavefunctions (normalized)",
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
      title: "Ψ",
      range: [-1, 1],
      tickcolor: "black",
      zerolinecolor: "#ededeb",
      color: "black",
      automargin: true,
    },
    plot_bgcolor: "#ededeb",
    paper_bgcolor: "#ededeb",
  };

  // Create the initial graph
  Plotly.newPlot("chart", data, layout, {
    responsive: true,
  });

  // Renders next graph immediately
  secondChart(q1);
}

export { firstChart };
