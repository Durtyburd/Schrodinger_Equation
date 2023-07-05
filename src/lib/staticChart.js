import Plotly from "plotly.js-dist-min";
import { max } from "mathjs";

function staticChart(q1) {
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
    trace1yArr.push(q1.psimag[i] / max(q1.psimag));
    trace2xArr.push(q1.lx[i] / q1.angstromStar);
    trace2yArr.push(q1.Vx[i] / max(q1.Vx));
    trace3xArr.push(q1.lx[i] / q1.angstromStar);
    trace3yArr.push(q1.psii[i] / max(q1.psii));
    trace4xArr.push(q1.lx[i] / q1.angstromStar);
    trace4yArr.push(q1.psir[i] / max(q1.psir));
  }

  const trace1 = {
    x: [...trace1xArr],
    y: [...trace1yArr],
    line: {
      color: "black",
    },
    name: "|Ψ|^2",
  };

  let trace2 = {
    y: [...trace2xArr],
    x: [...trace2yArr], // something up with this one
    line: {
      color: "black",
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
    y: [...trace4xArr],
    x: [...trace4yArr], // messed up too
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
      name: " ",
      fixedrange: true,
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
  }).then(function () {
    // Animate the graph
  });
}

export { staticChart };
