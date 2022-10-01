import { app, BrowserWindow } from "electron";

declare const MAIN_WINDOW_WEBPACK_ENTRY: string;
declare const MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY: string;

import { Module } from "./core/Module";
import { CategoryController } from "./controllers/CategoryController";
import { CategoryService } from "./services/CategoryService";
import { FileService } from "./services/FileService";
import { TransactionsController } from "./controllers/TransactionsController";
import { AccountService } from "./services/AccountService";
import { AccountsController } from "./controllers/AccountsController";

Module.bootstrap({
  controllers: [
    CategoryController,
    TransactionsController,
    AccountsController,
  ],
  services: [
    FileService,
    CategoryService,
    AccountService,
  ],
});

class App {
  public mainWindow: BrowserWindow;

  public start() {
    app.on("ready", this.createWindow);

    app.on("window-all-closed", () => {
      app.quit();
    });
  }

  public createWindow(): void {
    this.mainWindow = new BrowserWindow({
      height: 900,
      width: 1500,
      webPreferences: {
        preload: MAIN_WINDOW_PRELOAD_WEBPACK_ENTRY,
        nodeIntegration: true,
      },
    });
    this.mainWindow.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
    this.mainWindow.webContents.openDevTools();
  }
}

const mainApp = new App();
mainApp.start();
