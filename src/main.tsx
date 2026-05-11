import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

// Global filter for library-internal deprecation warnings
const originalWarn = console.warn;
console.warn = (...args) => {
  if (args[0] && typeof args[0] === 'string' && (
    args[0].includes('THREE.Clock') || 
    args[0].includes('deprecated') && args[0].includes('Timer')
  )) {
    return;
  }
  originalWarn.apply(console, args);
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
