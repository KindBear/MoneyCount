import { createTheme } from "@mui/material";



const theme = createTheme({
  palette: {
    primary: {
      main: "#00ED9A",
      contrastText: '#fff'
    },
    secondary: {
      main: "#1e3d4a",
      contrastText: '#fff'
    }
    
    
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
},

})

export default theme;