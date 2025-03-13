import { createRoot } from "react-dom/client";

export function HelloWorld() {
  return <p>Hello, World!</p>;
}

createRoot(document.getElementById("root")).render(<HelloWorld />);
