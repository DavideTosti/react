import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Welcome from "./Welcome.jsx";
import Counter from "./Counter.jsx";
import Login from "./Login.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Welcome />
    <Counter />
    <Login />
  </StrictMode>
);
