import { contextBridge, ipcRenderer } from "electron";

contextBridge.exposeInMainWorld("electron", {
  ipcRenderer: {
    invoke<A, R> (channel: string, args: A): Promise<R> {
      return ipcRenderer.invoke(channel, args);
    },
  },
});
