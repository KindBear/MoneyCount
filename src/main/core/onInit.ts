export interface onInit {
  onInit: Function;
}

export function implementsOnInit(object: any): object is onInit {
  return 'onInit' in object;
}
