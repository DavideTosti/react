import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { SWRConfig } from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json()); //fetcher globale per tutte le chiamate di useSWR

createRoot(document.getElementById("root")).render(
  <SWRConfig value={{ fetcher }}>
    <StrictMode>
      <App />
    </StrictMode>
  </SWRConfig>
);
