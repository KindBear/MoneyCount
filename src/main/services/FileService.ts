import { access, readFile, writeFile, mkdir } from "fs/promises";
import { constants } from "fs";
import path from "path";
import { service } from "../core/service";
import { onInit } from "../core/onInit";

@service()
export class FileService implements onInit {
  private dirName = "userData";

  onInit() {
    if (process.env.NODE_ENV === "development") {
      this.dirName = "../../userData";
    }
    this.checkUserDirectoryAccess();
  }

  async writeFile(fileName: string, data: string): Promise<void> {
    const filePath = path.join(__dirname, this.dirName, fileName);
    await writeFile(filePath, data, "utf8");
  }

  async readFile(fileName: string): Promise<string> {
    const filePath = path.join(__dirname, this.dirName, fileName);
    if (await this.checkAccess(filePath)) {
      return await readFile(filePath, { encoding: "utf8" });
    } else {
      return "";
    }
  }

  async checkAccess(path: string): Promise<boolean> {
    try {
      await access(path, constants.F_OK | constants.R_OK | constants.W_OK);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  async checkUserDirectoryAccess(): Promise<void> {
    const dirPath = path.join(__dirname, this.dirName);
    try {
      await access(dirPath, constants.F_OK | constants.R_OK | constants.W_OK);
    } catch (err) {
      console.error("checkUserDirectoryAccess error: ", err);
      await mkdir(dirPath)
    }
  }
}
