import {InvalidCardValueError} from './errors';

export class Card {
  private internalValue: number;

  constructor(value: number) {
    this.internalValue = value;
  }

  get value(): number {
    return this.internalValue;
  }

  set value(newValue: number) {
    if (newValue <= 1 || newValue >= 100) {
      throw new InvalidCardValueError(newValue)
    }
    this.internalValue = newValue;
  }
}