import React, { useState } from "react";
import { evaluate } from "mathjs";
import "../styles/calc.css";

function Calc() {
  const [text, setText] = useState("");
  const [clearInput, setClearInput] = useState(false);
  const [error, setError] = useState("");
  const [output, setOutput] = useState("");

  const handleClear = () => {
    setClearInput(true);
    setText("");
    setError("");
    setOutput("");
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
      setTimeout(() => {
        setClearInput(true);
        setText("");
      }, 1500);
    }
  };

  const handleOutput = () => {
    const output = evaluate(text);
    if (output) {
      setOutput(`= ${output}`);
      const ele = document.getElementById("output");
      const ele2 = document.getElementById("input");
      ele.classList.add("output");
      ele2.classList.add("input");
    }
    console.log(output);
  };

  return (
    <div id="calculator">
      <div id="display">
        {error && <p id="error">{error}</p>}
        {clearInput ? <p id="input">0</p> : <p id="input">{text}</p>}
        <p id="output">{output}</p>
      </div>
      <div id="buttons">
        <button id="clear" onClick={handleClear}>
          AC
        </button>
        <button id="add" className="operator" onClick={handleNumInput}>
          +
        </button>
        <button id="subtract" className="operator" onClick={handleNumInput}>
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
        <button id="multiply" className="operator" onClick={handleNumInput}>
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
        <button id="divide" className="operator" onClick={handleNumInput}>
          /
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
        <button id="multiply" className="operator" onClick={handleNumInput}>
          %
        </button>
        <button id="zero" onClick={handleNumInput}>
          0
        </button>
        <button id="decimal" onClick={handleNumInput}>
          .
        </button>
        <button id="equals" onClick={handleOutput}>
          =
        </button>
      </div>
    </div>
  );
}

export default Calc;
