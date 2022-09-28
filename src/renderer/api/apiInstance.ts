function api<A, R> (channel: string, args?: A): Promise<R> {
  return window.electron.ipcRenderer.invoke(channel, args);
}

export default api;
