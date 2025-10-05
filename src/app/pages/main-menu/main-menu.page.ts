import {Component, inject} from '@angular/core';
import {ButtonComponent} from '@components';
import {CardManager} from '@services';
import {CardComponent} from '@components';
import {Card} from '../../engine/models';

@Component({
  selector: 'app-main-menu',
  imports: [
    ButtonComponent,
    CardComponent,
  ],
  templateUrl: './main-menu.page.html',
  styleUrl: './main-menu.page.scss'
})
export class MainMenuPage {
  cardList: Card[] = []
  constructor(private cm: CardManager) {
    this.cardList = cm.cards
  }
}
