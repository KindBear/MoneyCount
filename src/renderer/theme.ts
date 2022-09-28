import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0e564f",
      contrastText: "#fff",
    },
    secondary: {
      main: "#1e3d4a",
      contrastText: "#fff",
    },
  },
  typography: {
    fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        "\"Segoe UI\"",
        "Roboto",
        "\"Helvetica Neue\"",
        "Arial",
        "sans-serif",
        "\"Apple Color Emoji\"",
        "\"Segoe UI Emoji\"",
        "\"Segoe UI Symbol\"",
      ].join(","),
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#0f1d2333",
        },
      },
    },
  },
});

export default theme;
