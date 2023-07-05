import { startSim } from "./startSim.js";

function handleClick(stateV0, statebw, statesig, stateke) {
  const {
    potentialBarrier,
    potentialBarrierWidth,
    electronEnergy,
    electronSpread,
    gridSize,
    timeStep,
  } = startSim(stateV0, statebw, statesig, stateke);
  console.log("");
  console.log("Potential barrier =", potentialBarrier, "eV");
  console.log("Potential barrier width =", potentialBarrierWidth, "A");
  console.log(
    "(The boundary of the simulation domain is assumed to be an infinite barrier)"
  );
  console.log("Electron energy =", electronEnergy, "eV");
  console.log("Electron spread =", electronSpread, "A");
  console.log("");
  console.log("Grid size =", gridSize, "A");
  console.log("Time step =", timeStep, "fs");
}

export { handleClick };
