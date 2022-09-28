export interface OnInit {
  onInit: () => void;
}

export function implementsOnInit(object: {}): object is OnInit {
  return "onInit" in object;
}
