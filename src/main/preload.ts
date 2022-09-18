import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electron", {
    ipcRenderer: {
        invoke(channel: string, ...args: unknown[]): Promise<any> {
            return ipcRenderer.invoke(channel, ...args);
        }
    }
});
