export class InvalidCardValueError extends Error {
  constructor(value: number) {
    super(`Invalid card value: ${value}. Value must be between 2 and 99, inclusive.`);
    this.name = 'InvalidCardValueError';
  }
}