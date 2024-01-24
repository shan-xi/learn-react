import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import App from "./App";
import Challenge1 from "./Challenge1";
import Challenge2 from "./Challenge2";
import Challenge3 from "./Challenge3";
import Challenge4 from "./Challenge4";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Challenge4 />
  </StrictMode>
);
