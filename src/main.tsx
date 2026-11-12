import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "./index.css";
import App from "./App";

const container = document.getElementById("root")!;
const app = (
  <StrictMode>
    <App pathname={window.location.pathname} />
  </StrictMode>
);

// The build pre-renders every route into static HTML (see scripts/prerender.mjs).
// Hydrate it instead of throwing the markup away and rendering from scratch —
// the page is interactive without a visible re-render or flash. In local
// development #root is empty, so fall back to a client render.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
