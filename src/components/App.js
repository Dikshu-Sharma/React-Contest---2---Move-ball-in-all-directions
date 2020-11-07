import React, { Component, useState } from "react";
import "../styles/App.css";

const App = () => {
  const [renderBall, setRenderBall] = useState(false);
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [ballPosition, setBallPosition] = useState({
    left: "0px",
    top: "0px"
  });
  const [start, setStart] = useState(true);
  const handleStart = () => {
    setRenderBall(true);
    setStart(false);
    document.addEventListener("keydown", handlekey);
  };
  const reset = () => {
    setBallPosition({
      left: "0px",
      top: "0px"
    });
    setRenderBall(false);
    setStart(true);
  };
  const handlekey = (event) => {
    console.log(event.key);
    if (event.key === "ArrowRight") {
      setX(x + 5);
      setBallPosition({
        left: `${x}px`,
        top: `${y}px`
      });
    } else if (event.key === "ArrowLeft") {
      setX(x - 5);
      setBallPosition({
        left: `${x}px`,
        top: `${y}px`
      });
    } else if (event.key === "ArrowDown") {
      setY(y + 5);
      setBallPosition({
        left: `${x}px`,
        top: `${y}px`
      });
    } else if (event.key === "ArrowTop") {
      setY(y - 5);
      setBallPosition({
        left: `${x}px`,
        top: `${y}px`
      });
    }
  };

  const renderChoice = () => {};

  return (
    <div className="playground">
      {renderBall && <div className="ball"></div>}
      {start && (
        <button onClick={handleStart} className="start">
          Start
        </button>
      )}
      <button onClick={reset} className="reset">
        Reset
      </button>
      {renderChoice()}
    </div>
  );
};

export default App;
