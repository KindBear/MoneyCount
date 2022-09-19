import "reflect-metadata";
import { MetadataKeys } from "./MetadataKeys";

export function controller(pathPrefix: string) {
    return function (target: Function) {
            Reflect.defineMetadata(MetadataKeys.pathPrefix, pathPrefix, target);
        };
}