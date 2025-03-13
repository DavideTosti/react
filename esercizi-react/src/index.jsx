import { createRoot } from "react-dom/client";
import { App } from "./App";

export function Index() {
  return <App />;
}

createRoot(document.getElementById("root")).render(<Index />);
