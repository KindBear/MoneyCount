import "reflect-metadata";
import { MetadataKeys } from "./MetadataKeys";
import { ipcMain } from "electron";

export function controller(pathPrefix: string) {
    return function (target: Function) {
        for (let key in target.prototype) {
            const handler = target.prototype[key];
            const path = Reflect.getMetadata(
                MetadataKeys.path,
                target.prototype,
                key
            );

            if (path) {
                ipcMain.handle(`${pathPrefix}${path}`, handler);
            }
        }
    };
}
