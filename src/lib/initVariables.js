import { sqrt, min, zeros, exp, cos, sin, max, pow } from "mathjs";
import linspace from "linspace";

class initVariables {
  constructor(V0, bw, ke, sig) {
    this.electronVolt = 1.602176634e-19;
    this.electronMass = 9.1093837015e-31; //m_e
    this.hbar = 1.0545718176461565e-34;
    this.angstromStar = 1.00001495e-10;
    this.V0 = V0 * this.electronVolt; // height of potential barrier in Joules
    /////////////////START HERE
    this.ke = ke * this.electronVolt; // kinetic energy of electron in Joules
    this.k0 = sqrt((this.ke * 2 * this.electronMass) / this.hbar ** 2); // wave vector of electron in m^-1
    this.bw = bw * this.angstromStar; // potential barrier width in m
    this.sig = sig * this.angstromStar; // Initial spread of Gaussian wavefunction
    this.dx = min(this.bw / 25.0, this.sig / 25.0); // grid cell size
    this.dt =
      (0.9 * this.hbar) /
      (this.hbar ** 2 / (this.electronMass * this.dx ** 2) + this.V0 / 2.0); // time step size
    this.length = 40 * max(this.bw, this.sig); // length of the simulation domain
    this.ll = Number((this.length / this.dx).toFixed(0)); // total number of grid points in the domain
    this.vel = (this.hbar * this.k0) / this.electronMass;
    this.tt = Number(Math.floor((0.35 * this.length) / this.vel / this.dt)); // total number of time steps in the simulation
    this.lx = linspace(0.0, this.length, this.ll); // 1D position vector along x
    // potential barrier
    this.Vx = zeros(this.ll).toArray();
    this.bwgrid = Number(Math.floor(this.bw / (2.0 * this.dx)));
    this.bposgrid = Number(this.ll / 2.0);
    this.bl = this.bposgrid - this.bwgrid;
    this.br = this.bposgrid + this.bwgrid;
    for (let i = this.bl; i < this.br; i++) {
      this.Vx[i] = this.V0;
    }
    // // wavefunction arrays
    this.psir = zeros(this.ll).toArray();
    this.psii = zeros(this.ll).toArray();
    this.psimag = zeros(this.ll).toArray();
    this.ac = 1.0 / sqrt(sqrt(Math.PI) * this.sig);
    this.x0 = this.bl * this.dx - 6 * this.sig;
    this.psigauss = [];
    for (let i = 0; i < this.lx.length; i++) {
      const indexVal =
        this.ac * exp(-pow(this.lx[i] - this.x0, 2) / (2.0 * this.sig ** 2)); // CHECK BACK ON THIS
      this.psigauss.push(indexVal);
      this.psir[i] = this.psigauss[i] * cos(this.k0 * this.lx[i]);
      this.psii[i] = this.psigauss[i] * sin(this.k0 * this.lx[i]);
      this.psimag[i] = this.psir[i] ** 2 + this.psii[i] ** 2;
    }

    // fdtd update coefficients
    this.c1 = (this.hbar * this.dt) / (2.0 * this.electronMass * this.dx ** 2);
    this.c2 = this.dt / this.hbar;
  }
}

const tester = new initVariables(600, 0.25, 500, 0.8);

export { initVariables };
