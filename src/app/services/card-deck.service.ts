import {Injectable} from '@angular/core';
import {Card} from '../engine/models';

export class CardManager {
  cards: Card[] = [];

  constructor() {
    for (let i = 2; i <= 99; i++) {
      this.cards.push(new Card(i));
    }
  }
}