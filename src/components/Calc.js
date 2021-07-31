import React, { useState } from "react";
import { evaluate, round } from "mathjs";
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
      if (text.includes(".")) {
        const btn = document.getElementById("decimal");
        btn.disabled = true;
      } else {
        const btn = document.getElementById("decimal");
        btn.disabled = false;
      }
      if (output && e.target.classList.contains("operator")) {
        setText(`${output}${e.target.innerText}`);
        setOutput("");
      }
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
    let output = evaluate(text);
    if (output || output.length >= 14) {
      setOutput(`${round(output, 4)}`);
      const ele = document.getElementById("output");
      const ele2 = document.getElementById("input");
      ele.classList.add("output");
      ele2.classList.add("input");
    } else {
      setOutput("0");
    }
  };

  return (
    <div id="calculator">
      <div id="display">
        {error && <p id="error">{error}</p>}
        {clearInput ? <p id="input">0</p> : <p id="input">{text}</p>}
        <p id="output">{`${output}`}</p>
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
