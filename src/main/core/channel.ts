/* tslint:disable:no-any */
import "reflect-metadata";
import { MetadataKeys } from "./MetadataKeys";
import { IpcMainInvokeEvent } from "electron";

interface HandlerDescriptor extends PropertyDescriptor {
  value?: (event: IpcMainInvokeEvent, ...args: any[]) => (Promise<void>) | (any);
}

export function channel(path: string): any {
  return (target: any, key: string, desc: HandlerDescriptor): void => {
    Reflect.defineMetadata(MetadataKeys.path, path, target, key);
  };
}
