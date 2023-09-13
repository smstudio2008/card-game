import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'card-game-play-card-view',
  templateUrl: './play-card-view.component.html',
  styleUrls: ['./play-card-view.component.scss']
})
export class PlayCardViewComponent implements OnInit {
  @Input() public cardList: any
  constructor() { }

  ngOnInit() {
  }


  handleCardToggle(event: { card: string, suit: string, selected: boolean }) {
    if (!event.selected) {
      console.log(`Card ${event.card} of ${event.suit} was deselected.`);
    } else {
      console.log(`Card ${event.card} of ${event.suit} was selected.`);
    }
  }
  
}
