import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { GlobalStyle } from "./css/globalstyle";
import { ThemeProvider } from "styled-components";
import light from "./css/themes/light";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    {
      <BrowserRouter>
        <GlobalStyle />
        <ThemeProvider theme={light}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    }
  </React.StrictMode>
);
reportWebVitals();
