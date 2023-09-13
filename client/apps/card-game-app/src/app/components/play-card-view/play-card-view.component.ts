import {
  Component,
  Input,
  ChangeDetectionStrategy,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef,
  QueryList,
  ViewChildren,
  ChangeDetectorRef,
  inject,
} from '@angular/core';
import { Card } from '@card-game/shared';

import { CgCardComponent } from '@card-game/ui';

@Component({
  selector: 'card-game-play-card-view',
  templateUrl: './play-card-view.component.html',
  styleUrls: ['./play-card-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayCardViewComponent {
  @ViewChildren(CgCardComponent) public playingCards!: QueryList<CgCardComponent>;
  @ViewChild('cardInput') public cardInput!: ElementRef;

  @Input() public cardList: Card[] | undefined;
  @Output() public cardToggle: EventEmitter<string[]> = new EventEmitter();

  public selectedCards: string[] = [];

  public _changeDetection: ChangeDetectorRef = inject(ChangeDetectorRef);

  public handleCardToggle(event: { cardRepresentation: string; selected: boolean }): void {
    if (!event.selected) {
      this.selectedCards = this.selectedCards.filter((card) => card !== event.cardRepresentation);
    } else {
      this.selectedCards.push(event.cardRepresentation);
    }

    this.cardToggle.emit([...this.selectedCards]);
  }

  public captureInput(cardValue: string): void {
    if (cardValue.length >= 2 && cardValue.length <= 3 && !this.selectedCards.includes(cardValue)) {
      this.selectedCards.push(cardValue);

      this.cardToggle.emit([...this.selectedCards]);
    }
  }

  public deselectAllCards(): void {
    this.selectedCards = [];

    this.playingCards.forEach((cardComponent) => cardComponent.deselectCard());
    this._changeDetection.detectChanges();
  }
}
