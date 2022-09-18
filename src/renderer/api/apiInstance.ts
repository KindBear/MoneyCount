function api(channel: string, ...args: unknown[]): Promise<any> {
  return window.electron.ipcRenderer.invoke(channel, args)
}

export default api;
