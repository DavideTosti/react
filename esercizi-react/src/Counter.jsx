import { useState } from "react";

export default function CounterDisplay() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const style = {
    fontSize: "24px",
    color: "blue",
  };

  return (
    <div>
      <div style={style}>Counter: {count}</div>
      <button onClick={increment}>Incrementa</button>
    </div>
  );
}
