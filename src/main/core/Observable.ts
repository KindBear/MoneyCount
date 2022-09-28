type Observer<T> = (value: T) => void;

export class Observable<T> {
  private _value: T;
  private observers: Observer<T>[] = [];

  constructor(defaultValue: T) {
    this._value = defaultValue;
  }

  public set value(nextValue: T) {
    this._value = nextValue;
    this.observers.forEach((observer) => observer(this._value));
  }

  public get value(): T {
    return this._value;
  }

  public subscribe = (observer: Observer<T>): void => {
    const isExist = this.observers.includes(observer);
    if (isExist) {
      return console.error("Observer has been attached already.");
    }

    this.observers.push(observer);
  }

  public unsubscribe = (observer: Observer<T>): void => {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.error("Subject: Nonexistent observer.");
    }

    this.observers.splice(observerIndex, 1);
  }
}
