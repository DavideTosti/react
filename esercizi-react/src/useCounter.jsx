import { useState } from "react";

export default function useCounter(initialvalue = 0) {
  const [counter, setCounter] = useState(initialvalue);

  function handleIncrement() {
    setCounter((c) => c + 1);
  }
  function handleDecrement() {
    setCounter((c) => c - 1);
  }
  function handleReset() {
    setCounter(initialvalue);
  }

  return {
    counter: counter,
    onIncrement: handleIncrement,
    onDecrement: handleDecrement,
    onReset: handleReset,
  };
}
