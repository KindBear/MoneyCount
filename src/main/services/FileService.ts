import { access, mkdir, readFile, writeFile } from "fs/promises";
import { constants } from "fs";
import path from "path";
import { service } from "../core/service";
import { OnInit } from "../core/onInit";

@service()
export class FileService implements OnInit {
  private dirName = "userData";

  public onInit() {
    if (process.env.NODE_ENV === "development") {
      this.dirName = "../../userData";
    }
    this.checkUserDirectoryAccess();
  }

  public async writeFile(fileName: string, data: string): Promise<void> {
    const filePath = path.join(__dirname, this.dirName, fileName);
    await writeFile(filePath, data, "utf8");
  }

  public async readFile(fileName: string): Promise<string> {
    const filePath = path.join(__dirname, this.dirName, fileName);
    if (await this.checkAccess(filePath)) {
      return readFile(filePath, { encoding: "utf8" });
    } else {
      return "";
    }
  }

  public async checkAccess(filepath: string): Promise<boolean> {
    try {
      await access(filepath, constants.F_OK | constants.R_OK | constants.W_OK);
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  }

  public async checkUserDirectoryAccess(): Promise<void> {
    const dirPath = path.join(__dirname, this.dirName);
    try {
      await access(dirPath, constants.F_OK | constants.R_OK | constants.W_OK);
    } catch (err) {
      console.error("checkUserDirectoryAccess error: ", err);
      await mkdir(dirPath);
    }
  }
}
