import {Component, output} from '@angular/core';

@Component({
  selector: 'c-button',
  template: `
    <button (click)="onClick.emit($event)">
      <ng-content>
        Button
      </ng-content>
    </button>
  `,
})
export class ButtonComponent {
  onClick = output<Event>()
}
