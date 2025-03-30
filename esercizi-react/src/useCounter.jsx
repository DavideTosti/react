import { useState, useCallback } from "react";

export default function useCounter(initialvalue = 0) {
  const [counter, setCounter] = useState(initialvalue);

  const handleIncrement = useCallback(() => {
    setCounter((c) => c + 1);
  }, []);

  const handleDecrement = useCallback(() => {
    setCounter((c) => c - 1);
  }, []);

  const handleReset = useCallback(() => {
    setCounter(initialvalue);
  }, [initialvalue]);

  return {
    counter,
    onIncrement: handleIncrement,
    onDecrement: handleDecrement,
    onReset: handleReset,
  };
}
