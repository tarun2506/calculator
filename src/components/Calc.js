import React from "react";
import "../styles/calc.css";

function Calc() {
  return (
    <div id="calculator">
      <div id="display"></div>
      <div id="buttons">
        <button id="clear">AC</button>
        <button id="add" className="operator">
          +
        </button>
        <button id="subtract" className="operator">
          -
        </button>
        <button id="seven">7</button>
        <button id="eight">8</button>
        <button id="nine">9</button>
        <button id="multiply" className="operator">
          *
        </button>
        <button id="four">4</button>
        <button id="five">5</button>
        <button id="six">6</button>
        <button id="divide" className="operator">
          ÷
        </button>
        <button id="one">1</button>
        <button id="two">2</button>
        <button id="three">3</button>
        <button id="multiply" className="operator">
          %
        </button>
        <button id="zero">0</button>
        <button id="decimal">.</button>
        <button id="equals">=</button>
      </div>
    </div>
  );
}

export default Calc;
