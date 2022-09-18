export interface ipcRenderer {
    invoke: (channel: string, ...args: unknown[]) => Promise<any>,
}

declare global {
    interface Window {
        electron: {
            ipcRenderer: ipcRenderer
        }
    }
}
