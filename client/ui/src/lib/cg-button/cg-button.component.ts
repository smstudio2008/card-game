import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-game-button',
  templateUrl: './cg-button.component.html',
  styleUrls: ['./cg-button.component.scss'],
})
export class CgButtonComponent {
  @Input() public buttonLabel = 'Button';
  @Input() public buttonStyle: 'primary' | 'secondary' = 'primary';
}
