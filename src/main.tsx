import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";

const main = createTheme({
  palette: {
    primary: { main: "#b28e59" },
    secondary: { main: "#7d6d99" },
    background: { default: "#b2aa9c" },
  },
  typography: {
    h1: { fontSize: "3rem", fontWeight: 600 },
    h2: { fontSize: "1.75rem", fontWeight: 600 },
    h3: { fontSize: "1rem", fontWeight: 600 },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={main}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StrictMode>
);
