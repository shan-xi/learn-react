import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import TrafficLight from "./Challenge1.js";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <TrafficLight />
  </StrictMode>
);
