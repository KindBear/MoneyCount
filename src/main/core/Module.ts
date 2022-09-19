import "reflect-metadata";
import { MetadataKeys } from "./MetadataKeys";
import { ipcMain } from "electron";

export interface Type<T> {
  new(...args: any[]): T;
}

export type ModuleOptions = {
  controllers: Type<any>[];
  services: Type<any>[];
}

export class Module {
  private static container = new Map<string, any>();

  static bootstrap(options: ModuleOptions): void {
    const { services, controllers } = options;

    services.forEach(service => {
      Module.resolve(service);
    });

    controllers.forEach(controller => {
      Module.resolveController(controller);
    });
  }

  static resolve<T>(target: Type<T>): T {
    if (Module.container.has(target.name)) {
      return Module.container.get(target.name);
    }
    const tokens = Reflect.getMetadata(MetadataKeys.paramTypes, target) || [];
    const injections = tokens.map((token: Type<any>): any =>
      Module.resolve(token)
    );
    const instance = new target(...injections);
    Module.container.set(target.name, instance);

    return instance;
  }

  static resolveController<T>(target: Type<T>): T {
    const instance = Module.resolve(target);

    const pathPrefix = Reflect.getMetadata(MetadataKeys.pathPrefix, target);
    for (let key in target.prototype) {
      const handler = target.prototype[key].bind(instance);
      const path = Reflect.getMetadata(
        MetadataKeys.path,
        target.prototype,
        key
      );

      if (path) {
        ipcMain.handle(`${pathPrefix}${path}`, handler);
      }
    }

    return instance;
  }
}
