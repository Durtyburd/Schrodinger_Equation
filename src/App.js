import React from "react";
import { NavbarMain } from "./components/NavbarMain.js";
import { Activator } from "./components/Activator.js";
import { Form } from "./components/Form.js";
import { staticChart } from "./lib/staticChart.js";

function App() {
  return (
    <>
      <NavbarMain />
      <Activator />
      <Form />
    </>
  );
}

export { App };
