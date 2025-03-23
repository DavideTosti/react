import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Colors from "./Colors.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Colors
      colors={[
        { id: "1", name: "red" },
        { id: "2", name: "black" },
        { id: "3", name: "white" },
        { id: "4", name: "green" },
      ]}
    />
  </StrictMode>
);
