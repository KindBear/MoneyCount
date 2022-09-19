export interface ipcRenderer {
    invoke: <A, R>(channel: string, args: A) => Promise<R>,
}

declare global {
    interface Window {
        electron: {
            ipcRenderer: ipcRenderer
        }
    }
}
