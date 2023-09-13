import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'card-game-card',
  templateUrl: './cg-card.component.html',
  styleUrls: ['./cg-card.component.scss'],
})
export class CgCardComponent {
  @Input() public card: 'A' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'JOKER' | 'K' | string = 'A';
  @Input() public suit: 'hearts' | 'diamonds' | 'clubs' | 'spades' | 'joker' | string = 'hearts';

  @Output() public cardToggle: EventEmitter<{ cardRepresentation: string; selected: boolean }> = new EventEmitter();

  public isSelected = false;

  public toggleSelection(): void {
    this.isSelected = !this.isSelected;

    this.cardToggle.emit({
      cardRepresentation: this.getCardRepresentation(),
      selected: this.isSelected,
    });
  }

  public deselectCard(): void {
    this.isSelected = false;
  }

  private getCardRepresentation(): string {
    const suitMap: { [key: string]: string } = {
      hearts: 'H',
      diamonds: 'D',
      clubs: 'C',
      spades: 'S',
      joker: '',
    };

    if (this.card === 'JOKER') {
      return 'JK';
    }

    if (this.card === '10') {
      return `T${suitMap[this.suit]}`;
    }

    return `${this.card}${suitMap[this.suit]}`;
  }
}
