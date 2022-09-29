import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#00897b",
    },
    secondary: {
      main: "#00e3f5",
    },
    background: {
      default: "#004d40",
      paper: "#00695c",
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
    MuiButton: {
      styleOverrides: {
        root: {
          // backgroundColor: "#00A390",
          minHeight: 40,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          border: "2px solid #fff",
          height: 40,
          color: "#fff",
          minWidth: 256,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        icon: {
          color: "#fff",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: "#fff",
          top: "-8px",
          "&.Mui-focused": {
            color: "#fff",
          },
        },
        shrink: {
          padding: "0 4px",
          backgroundColor: "#0e564f",
          top: 0,
        },
      },
    },
  },
});

export default theme;
