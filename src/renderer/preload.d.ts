export interface IpcRenderer {
  invoke: <A, R>(channel: string, args: A) => Promise<R>;
}

declare global {
    interface Window {
      electron: {
        ipcRenderer: IpcRenderer,
      };
    }
}
