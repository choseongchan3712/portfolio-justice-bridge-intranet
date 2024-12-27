import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import { GlobalStyled } from "./GlobalStyled";
import { ThemeProvider } from "./components/global/provider/ThemeProvider";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyled />
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  </React.StrictMode>
);
