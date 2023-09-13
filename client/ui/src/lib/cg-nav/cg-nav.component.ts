import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-game-nav',
  templateUrl: './cg-nav.component.html',
  styleUrls: ['./cg-nav.component.scss'],
})
export class CgNavComponent {

  @Input() navLabel = 'CARD GAME SCORE CALCULATOR';
}
