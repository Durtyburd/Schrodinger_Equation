import { round } from "mathjs";
import { initVariables } from "./initVariables.js";

function startSim(V0_in, bw_in, ke_in, sig_in) {
  const q1 = new initVariables(V0_in, bw_in, ke_in, sig_in);
  const potentialBarrier = round(q1.V0 / q1.electronVolt, 2);
  const potentialBarrierWidth = round(q1.bw / q1.angstromStar, 2);
  const electronEnergy = round(q1.ke / q1.electronVolt, 2);
  const electronSpread = round(q1.sig / q1.angstromStar, 2);
  const gridSize = (q1.dx / q1.angstromStar).toExponential(2);
  const timeStep = (q1.dt * 1e15).toExponential(2);
  return {
    q1,
    potentialBarrier,
    potentialBarrierWidth,
    electronEnergy,
    electronSpread,
    gridSize,
    timeStep,
  };
}

export { startSim };
