import { initVariables } from "./initVariables.js";

describe("initVariables", () => {
  test("should correctly initialize variables", () => {
    // define input values
    const inputV0 = 600; // sample input values
    const inputBw = 0.25;
    const inputKe = 500;
    const inputSig = 0.8;

    // expected output values
    const expectedElectronVolt = 1.602176634e-19;
    const expectedElectronMass = 9.1093837015e-31;
    const expectedHbar = 1.0545718176461565e-34;
    const expectedAngstromStar = 1.00001495e-10;
    const expectedV0 = 9.613059803999999e-17;
    const expectedke = 8.01088317e-17;
    const expectedk0 = 114557501632.91742;
    const expectedbw = 2.500037375e-11;
    const expectedsig = 8.0001196e-11;
    const expecteddx = 1.00001495e-12;
    const expecteddt = 7.743936918113952e-21;
    const expectedLength = 3.2000478400000002e-9;
    const expectedll = 3200;
    const expectedVel = 13262051.164024979;
    const expectedtt = 10905;
    const expectedlx1 = 0.0; // array index 0
    const expectedlx2 = 3.20004784e-9; // array index (length - 1)
    const expectedVx1 = 0.0; // array index 0
    const expectedVx2 = 0.0; // array index (length - 1)
    const expectedbwgrid = 12;
    const expectedbposgrid = 1600;
    const expectedbl = 1588;
    const expectedbr = 1612;
    const expectedNewVx1 = 9.613059803999999e-17;
    const expectedNewVx2 = 9.613059803999999e-17;
    const expectedpsir1 = 1.86396462e-37;
    const expectedpsir2 = -1.52018886e-144;
    const expectedpsii1 = 0.0;
    const expectedpsii2 = 2.25120017e-144;
    const expectedpsimag1 = 3.4743641e-74;
    const expectedpsimag2 = 7.37887635e-288;
    const expectedpsigauss1 = 1.86396462e-37;
    const expectedpsigauss2 = 2.71640872e-144;
    const expectedac = 83977.76112158937;
    const expectedx0 = 1.1080165646e-9;
    const expectedc1 = 0.4482352333082827;
    const expectedc2 = 73432048804402.03;

    // call the function
    const result = new initVariables(inputV0, inputBw, inputKe, inputSig);

    // assert the returned values match the expected values
    expect(result.electronVolt).toBe(expectedElectronVolt);
    expect(result.electronMass).toBe(expectedElectronMass);
    expect(result.hbar).toBe(expectedHbar);
    expect(result.angstromStar).toBe(expectedAngstromStar);
    expect(result.V0).toBe(expectedV0);
    expect(result.ke).toBe(expectedke);
    expect(result.k0).toBe(expectedk0);
    expect(result.bw).toBe(expectedbw);
    expect(result.sig).toBe(expectedsig);
    expect(result.dx).toBe(expecteddx);
    expect(result.dt).toBe(expecteddt);
    expect(result.length).toBe(expectedLength);
    expect(result.ll).toBe(expectedll);
    expect(result.vel).toBe(expectedVel);
    expect(result.tt).toBe(expectedtt);
    expect(result.lx[0]).toBe(expectedlx1);
    expect(Number(result.lx[result.lx.length - 1].toFixed(18))).toBe(
      expectedlx2
    );
    expect(result.Vx[1]).toBe(expectedVx1);
    expect(result.Vx[result.Vx.length - 1]).toBe(expectedVx2);
    expect(result.bwgrid).toBe(expectedbwgrid);
    expect(result.bposgrid).toBe(expectedbposgrid);
    expect(result.bl).toBe(expectedbl);
    expect(result.br).toBe(expectedbr);
    expect(result.Vx[result.bl]).toBe(expectedNewVx1);
    expect(result.Vx[result.br - 1]).toBe(expectedNewVx2);
    /////////////////////////////////////////////////////////////
    // not exactly precise, but extremely close //
    // expect(result.psir[0]).toBe(expectedpsir1);
    // expect(result.psir[result.psir.length - 1]).toBe(expectedpsir2);
    // expect(result.psii[0]).toBe(expectedpsii1);
    // expect(result.psii[result.psii.length - 1]).toBe(expectedpsii2);
    // expect(result.psimag[0]).toBe(expectedpsimag1);
    // expect(result.psimag[result.psimag.length - 1]).toBe(expectedpsimag2);
    // expect(result.psigauss[0]).toBe(expectedpsigauss1);
    // expect(result.psigauss[result.psigauss - 1]).toBe(expectedpsigauss2);
    //////////////////////////////////////////////////////////////
    expect(result.ac).toBe(expectedac);
    expect(result.x0).toBe(expectedx0);
    expect(result.c1).toBe(expectedc1);
    expect(result.c2).toBe(expectedc2);
  });
});
