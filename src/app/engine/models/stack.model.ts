import {Card} from './card.model';
import {StackOverflowError} from './errors';

/**
 * Represent each stack of cards in the game.
 */
export class CardStack {
  private cardsInStack: Stack<Card> = new Stack<Card>(100);

  constructor(
    public readonly type: 'up' | 'down',
    public initCard: Card,
  ) {
    this.cardsInStack.push(initCard);
  }

  getTopCard(): Card {
    return this.cardsInStack.peek() as Card;
  }

  playCard(card: Card): void {

  }
}

export interface IStack<T> {
  push(item: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  isEmpty(): boolean;
  size(): number;
}

export class Stack<T> implements IStack<T> {
  private items: T[] = [];

  constructor(private capacity: number = Infinity) {
  }

  push(item: T): void {
    if (this.size() === this.capacity) {
      throw new StackOverflowError();
    }
    this.items.push(item);
  }

  pop(): T | undefined {
    return this.items.pop();
  }

  peek(): T | undefined {
    return this.items[this.size() - 1];
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  size(): number {
    return this.items.length;
  }
}