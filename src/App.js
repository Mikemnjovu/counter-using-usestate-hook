import React, { useState } from "react";
import "./style.css";

export default function App() {
  // using setState hook
  const [counter, setCounter] = useState(0);
  const addCount = () => {
    setCounter(counter + 1);
  };

  const restCounter = () => {
    setCounter(0);
  };
  return (
    <div>
      <p>The Counter is {counter}</p>
      <button onClick={addCount}> add 1</button>
      <button onClick={restCounter}> Rest</button>
    </div>
  );
}
