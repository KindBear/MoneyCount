import "reflect-metadata";
import { MetadataKeys } from "./MetadataKeys";

export function controller(pathPrefix: string) {
  return (target: unknown) => {
    Reflect.defineMetadata(MetadataKeys.pathPrefix, pathPrefix, target);
  };
}
