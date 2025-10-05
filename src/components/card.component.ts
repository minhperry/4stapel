import {Component, input} from '@angular/core';
import {Card} from '../app/engine/models';
import {AMOUNT, OKLCH_COLOR_CONSTANTS} from '@utils';
import {interpolateRange} from '../app/utils/utils';

@Component({
  selector: 'c-card',
  template: `
    <div class="card"
         [style.background-color]="getOklchColor()"
    >
      {{ card().value }}
    </div>
  `,
  styles: `
    .card {
      width: 4rem;
      height: 6rem;
      border-radius: 0.5rem;
      border: 2px solid black;
      padding: 0.25rem;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 2rem;
      font-weight: bold;
      user-select: none;
    }
  `
})
export class CardComponent {
  card = input.required<Card>()

  protected getOklchColor(): string {
    const cardValue = this.card().value;
    const progress = (cardValue - 2) / (AMOUNT - 1);
    const light = interpolateRange(OKLCH_COLOR_CONSTANTS.LIGHTNESS, progress);
    const chroma = interpolateRange(OKLCH_COLOR_CONSTANTS.CHROMA, progress);
    const hue = interpolateRange(OKLCH_COLOR_CONSTANTS.HUE, progress);
    return `oklch(${light} ${chroma} ${hue})`;
  }
}