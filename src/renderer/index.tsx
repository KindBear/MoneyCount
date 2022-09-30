import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import TransactionsContext, { transactionsStoreInstance } from "./contexts/TransactionsContext";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <TransactionsContext.Provider value={transactionsStoreInstance}>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeProvider theme={theme}>
        <App/>
      </ThemeProvider>
    </LocalizationProvider>,
  </TransactionsContext.Provider>,
);
