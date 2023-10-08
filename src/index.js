import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Game from "./components/Game";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Game />
  </StrictMode>
);
