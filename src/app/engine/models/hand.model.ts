import {Card} from './card.model';

/**
 * Represents the current "hand", which is just the list of cards
 * that the player currently holds.
 */
export class Hand {
  private handCards: Card[] = [];

  add(card: Card): void {
    this.handCards.push(card);
  }

  remove(card: Card): void {
    const index = this.handCards.indexOf(card);
    if (index !== -1) {
      this.handCards.splice(index, 1);
    }
  }

  getHandCards(): Card[] {
    return this.handCards;
  }
}