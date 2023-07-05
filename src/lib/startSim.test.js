import { startSim } from "./startSim.js";

describe("startSim", () => {
  test("should correctly initialize variables", () => {
    // define input values
    const inputV0 = 600; // sample input values
    const inputBw = 0.25;
    const inputKe = 500;
    const inputSig = 0.8;

    // call the function
    const {
      potentialBarrier,
      potentialBarrierWidth,
      electronEnergy,
      electronSpread,
      gridSize,
      timeStep,
    } = startSim(inputV0, inputBw, inputKe, inputSig);

    // expected output values
    const expectedPotentialBarrier = 600;
    const expectedBarrierWidth = 0.25;
    const expectedElectronEnergy = 500;
    const expectedElectronSpread = 0.8;
    const expectedGridSize = "1.00e-2";
    const expectedTimeStep = "7.74e-6";

    // assert the returned values match the expected values
    expect(potentialBarrier).toBe(expectedPotentialBarrier);
    expect(potentialBarrierWidth).toBe(expectedBarrierWidth);
    expect(electronEnergy).toBe(expectedElectronEnergy);
    expect(electronSpread).toBe(expectedElectronSpread);
    expect(gridSize).toBe(expectedGridSize);
    expect(timeStep).toBe(expectedTimeStep);
  });
});
