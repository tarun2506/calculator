import React, { useState } from "react";
import "../styles/calc.css";

function Calc() {
  const [text, setText] = useState("");
  const [clearInput, setClearInput] = useState(false);
  const [error, setError] = useState("");

  const handleClear = () => {
    setClearInput(true);
    setText("");
    setError("");
  };

  const handleNumInput = (e) => {
    setClearInput(false);
    if (text.length <= 14) {
      setText((prev) => prev + e.target.innerText);
    } else {
      setError("Limit Reached 😭");
      setTimeout(() => {
        setError("");
      }, 1000);
    }
  };

  return (
    <div id="calculator">
      <div id="display">
        {error && <p id="error">{error}</p>}
        {clearInput ? <p id="input">0</p> : <p id="input">{text}</p>}
      </div>
      <div id="buttons">
        <button id="clear" onClick={handleClear}>
          AC
        </button>
        <button id="add" className="operator">
          +
        </button>
        <button id="subtract" className="operator">
          -
        </button>
        <button id="seven" onClick={handleNumInput}>
          7
        </button>
        <button id="eight" onClick={handleNumInput}>
          8
        </button>
        <button id="nine" onClick={handleNumInput}>
          9
        </button>
        <button id="multiply" className="operator">
          *
        </button>
        <button id="four" onClick={handleNumInput}>
          4
        </button>
        <button id="five" onClick={handleNumInput}>
          5
        </button>
        <button id="six" onClick={handleNumInput}>
          6
        </button>
        <button id="divide" className="operator">
          ÷
        </button>
        <button id="one" onClick={handleNumInput}>
          1
        </button>
        <button id="two" onClick={handleNumInput}>
          2
        </button>
        <button id="three" onClick={handleNumInput}>
          3
        </button>
        <button id="multiply" className="operator">
          %
        </button>
        <button id="zero" onClick={handleNumInput}>
          0
        </button>
        <button id="decimal" onClick={handleNumInput}>
          .
        </button>
        <button id="equals">=</button>
      </div>
    </div>
  );
}

export default Calc;
