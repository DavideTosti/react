import { createRoot } from "react-dom/client";
import { Hello } from "./Hello";

export function App() {
  return (
    <div>
      <Hello />
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
