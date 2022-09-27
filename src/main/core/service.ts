import "reflect-metadata";

export function service() {
  return function(_target: Function) {
    // do nothing
    // we need this decorator to emit metadata design:paramtypes for our services
  };
}
