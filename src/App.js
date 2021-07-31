import Calc from "./components/Calc";
import BuildBy from "./components/BuildBy";
import "./styles/app.css";
import React, { useState } from "react";
import "./styles/app.css";

function App() {
  const [display, setDisplay] = useState(false);
  const handleDisplay = () => {
    setDisplay(true);
  };
  return (
    <div id="app">
      <Calc />
      <BuildBy />
    </div>
  );
}

export default App;
