import { createRoot } from 'react-dom/client';
import App from './App';
import "./index.css"
import { ThemeProvider } from "@mui/material";
import theme from "./theme";



const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <ThemeProvider theme={theme}>
    <App />
 </ThemeProvider>
);

// calling IPC exposed from preload script
window.electron.ipcRenderer.once('ipc-example', (arg) => {
  // eslint-disable-next-line no-console
  console.log(arg);
});
window.electron.ipcRenderer.sendMessage('ipc-example', ['ping']);
