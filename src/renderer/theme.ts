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
  components: {
    MuiTypography: {
      variants: [
        {
          props: { color: "disabled" },
          style: {
            color: "rgba(255, 255, 255, 0.5)",
          },
        },
      ],
    },
    MuiFormControl: {
      defaultProps: {
        fullWidth: true,
      },
      styleOverrides: {
        root: {
          // minHeight: 48,
          margin: "8px 0",
          // alignItems: "baseline"
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundColor: "#0f1d2333",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "contained",
        color: "primary",
      },
      styleOverrides: {
        root: {
          minHeight: 40,
        },
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        size: "small",
        notched: true,
      },
      styleOverrides: {
        root: {
          color: "#fff",
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#fff",
          },
        },
        notchedOutline: {
          borderWidth: 2,
          borderColor: "#fff",
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
      defaultProps: {
        shrink: true,
      },
      styleOverrides: {
        root: {
          color: "#fff",
          "&.Mui-focused": {
            color: "#fff",
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          display: "none",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          backgroundColor: "#00463E",
          color: "#fff",
          minHeight: "32px",
          padding: "0px 8px",
          margin: "8px 8px 8px 0px",
          textTransform: "none",
          fontSize: "16px",

          "&.Mui-selected": {
            backgroundColor: "#00A390",
            color: "#fff",
          },
        },
      },
    },
  },
});

export default theme;
