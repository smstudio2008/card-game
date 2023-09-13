import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'card-game-card',
  templateUrl: './cg-card.component.html',
  styleUrls: ['./cg-card.component.scss'],
})
export class CgCardComponent {
  @Input() public card:
    | 'A'
    | '2'
    | '3'
    | '4'
    | '5'
    | '6'
    | '7'
    | '8'
    | '9'
    | '10'
    | 'J'
    | 'Q'
    | 'JOKER'
    | 'K' = 'A';

  @Input() public suit: 'hearts' | 'diamonds' | 'clubs' | 'spades' | 'joker' =
    'hearts';

  @Output() public cardToggle: EventEmitter<{
    card: string;
    suit: string;
    selected: boolean;
  }> = new EventEmitter();

  public isSelected = false;

  public toggleSelection() {
    this.isSelected = !this.isSelected;
    this.cardToggle.emit({
      card: this.card,
      suit: this.suit,
      selected: this.isSelected,
    });
  }
}
