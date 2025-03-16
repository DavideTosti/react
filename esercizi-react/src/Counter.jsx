import { useEffect, useState } from "react";
import { Clock } from "./Clock";

export function Counter({ initial = 0, change = 1 }) {
  const [count, setCount] = useState(initial);

  useEffect(() => {
    console.log(`The value of the counter is ${count}`);
  }, [count]);

  function handleIncrement() {
    setCount((c) => c + change);
  }
  function handleDecrement() {
    setCount((c) => c - change);
  }
  function handleReset() {
    setCount(initial);
  }
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <Clock />
    </div>
  );
}
