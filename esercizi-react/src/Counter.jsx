import { useState } from "react";

export function Counter({ initial = 0, increment = 1, decrement = 1 }) {
  const [count, setCount] = useState(initial);

  function handleIncrement() {
    setCount((c) => c + increment);
  }
  function handleDecrement() {
    setCount((c) => c - decrement);
  }
  function handleReset() {
    setCount(initial);
  }
  return (
    <div>
      <h2>{count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
