import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

export interface Card {
  card: string;
  suit: string;
}

@Injectable({
  providedIn: 'root',
})
export class CardScoreCalculatorService {
  public readonly apiUrl = 'https://mocki.io/v1/272c2cf8-8e78-42c3-80c1-3e68c30423e4';
  public readonly postUrl = 'https://cardgameapi2023.azurewebsites.net/score';

  private _http: HttpClient = inject(HttpClient);

  public getCards(): Observable<{ cards: Card[] }> {
    return this._http.get<{ cards: Card[] }>(this.apiUrl);
  }

  public submitCalculation(cardList: string[]): Observable<number> {
    return this._http.post<number>(this.postUrl, cardList);
  }
}
