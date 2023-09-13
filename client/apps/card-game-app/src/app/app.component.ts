import { Component, OnInit, ViewChild, inject } from '@angular/core';

import { Card, CardScoreCalculatorService } from '@card-game/shared';

import { Observable, catchError, of, tap } from 'rxjs';

import { PlayCardViewComponent } from './components/play-card-view/play-card-view.component';

@Component({
  selector: 'card-game-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild(PlayCardViewComponent) public childPlayCardComponent!: PlayCardViewComponent;

  public cards$: Observable<{ cards: Card[] }> | undefined;
  public calculatedScore$: Observable<number | null> | undefined;

  public selectedCards: string[] = [];
  public errorMessage: string | null = null;

  private _cardService: CardScoreCalculatorService = inject(CardScoreCalculatorService);

  public ngOnInit(): void {
    this.cards$ = this._cardService.getCards();
  }

  public selectedCardList(list: string[]): void {
    this.selectedCards = [...list];
  }

  public getTheScore(): void {
    this.calculatedScore$ = this._cardService.submitCalculation(this.selectedCards).pipe(
      tap(() => {
        this.errorMessage = null;
      }),
      catchError((error) => {
        this.errorMessage = error.error || 'An error occurred!';
        return of(null);
      })
    );
  }

  public reset(): void {
    this.selectedCards = [];
    this.errorMessage = null;
    this.childPlayCardComponent.deselectAllCards();

    const cardInputElement: HTMLInputElement = this.childPlayCardComponent.cardInput.nativeElement;
    cardInputElement.value = '';
  }
}
