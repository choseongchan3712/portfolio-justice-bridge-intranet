import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./Router";
import { GlobalStyled } from "./GlobalStyled";
import { ThemeProvider } from "./components/global/provider/ThemeProvider";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <GlobalStyled />
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </HelmetProvider>
  </React.StrictMode>
);
