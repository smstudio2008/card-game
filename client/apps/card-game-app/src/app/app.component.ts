import { Component, OnInit } from '@angular/core';
import { CardScoreCalculatorService } from '@card-game/shared';
import { Observable } from 'rxjs';

@Component({
  selector: 'card-game-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private cardService: CardScoreCalculatorService ) {}
  title = 'card-game-app';

  cards$: Observable<any> | undefined;

  ngOnInit() {
    this.cards$ = this.cardService.getCards();
  }
}
