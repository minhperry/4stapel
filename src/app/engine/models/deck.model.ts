/**
 * Represents the deck of remaining cards.
 */
export class CardDeck {
  private cardSet: Set<number> = new Set<number>();

  constructor() {
    this.initDeck()
  }

  drawNewCards(): [number, number] {
    const [num1, num2] = Array.from(this.cardSet)
      .sort(() => 0.5 - Math.random())
      .slice(0, 2);
    this.cardSet.delete(num1);
    this.cardSet.delete(num2);
    return [num1, num2];
  }

  isEmpty(): boolean {
    return this.cardSet.size === 0;
  }

  remainingCardsCount(): number {
    return this.cardSet.size;
  }

  resetDeck(): void {
    this.cardSet.clear();
    this.initDeck()
  }

  private initDeck() {
    for (let i = 2; i <= 99; i++) {
      this.cardSet.add(i);
    }
  }
}