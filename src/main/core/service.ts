import "reflect-metadata";

export function service() {
  return (_target: unknown) => {
    // do nothing
    // we need this decorator to emit metadata design:paramtypes for our services
  };
}
