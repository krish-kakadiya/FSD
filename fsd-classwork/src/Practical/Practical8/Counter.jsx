import React, { useState, useEffect } from "react";
import "./Counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  // Load saved count from localStorage
  useEffect(() => {
    const savedCount = localStorage.getItem("gymCount");
    if (savedCount) {
      setCount(Number(savedCount));
    }
  }, []);

  // Save count whenever it changes
  useEffect(() => {
    localStorage.setItem("gymCount", count);
  }, [count]);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count > 0 ? count - 1 : 0);
  const reset = () => {
    setCount(0);
    localStorage.removeItem("gymCount");
  };

  return (
    <div className="counter-container">
      <h1>🏋️ Gym Reps Counter</h1>
      <div className="count-display">{count}</div>

      <div className="button-group">
        <button onClick={decrement}>−</button>
        <button onClick={increment}>+</button>
      </div>

      <button className="reset-btn" onClick={reset}>Reset</button>
    </div>
  );
};

export default Counter;
