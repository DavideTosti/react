import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { SWRConfig } from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

createRoot(document.getElementById("root")).render(
  <SWRConfig value={{ fetcher }}>
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </SWRConfig>
);
