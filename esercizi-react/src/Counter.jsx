import useCounter from "./useCounter";

export function Counter({ initialvalue = 0 }) {
  const { counter, onIncrement, onDecrement, onReset } =
    useCounter(initialvalue);

  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}
