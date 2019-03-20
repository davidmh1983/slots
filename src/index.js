import React from "react";
import ReactDOM from "react-dom";
import Dates from "./components/dates.js";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h2>Cambia el tiempo de tu visita</h2>
      <Dates />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
