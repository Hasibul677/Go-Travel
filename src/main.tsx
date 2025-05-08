import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ContentProtector from "./ContentProtector.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <ContentProtector> */}
      <App />
    {/* </ContentProtector> */}
  </StrictMode>,
);
