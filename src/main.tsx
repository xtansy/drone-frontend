import "./shared/styles/base.css";

import { createRoot } from "react-dom/client";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { BrowserRouter } from "react-router";

import { Router } from "./router.tsx";
import { CursorEffect } from "./shared/ui";

const theme = createTheme({
  typography: {
    fontFamily: "Orbitron",
    h1: {
      fontSize: "32px",
    },
    h2: {
      fontSize: "16px",
    },
  },
  palette: {
    mode: "dark",
    background: {
      default: "#0a0a1a",
      paper: "var(--card-bg-color)",
    },
    text: {
      primary: "var(--white-color)",
    },
    divider: "var(--primary-color)",
  },
});

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router />
      <CursorEffect />
    </ThemeProvider>
  </BrowserRouter>
);
