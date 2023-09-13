import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Card {
  card: string;
  suit: string;
}

@Injectable({
  providedIn: 'root',
})
export class CardScoreCalculatorService {
  private apiUrl = 'https://mocki.io/v1/0b352833-519d-49e4-b908-6b121dfe435b';

  constructor(private http: HttpClient) {}

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.apiUrl);
  }
}
