import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// 🎨 Define the theme object
const theme = {
  background: "#ffffff",
  text: "#333",
  cardBg: "#f8f9fa",
  buttonBg: "#007bff",
  buttonText: "#fff",
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
</BrowserRouter>

  </React.StrictMode>
);

// ✅ Performance monitoring
reportWebVitals();
