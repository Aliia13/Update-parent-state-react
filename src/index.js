import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Update from "./components/Update";
import "./components/style.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Update />
  </StrictMode>
);
