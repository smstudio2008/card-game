
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Card, CardScoreCalculatorService } from './card-score-calculator.service';

describe('CardScoreCalculatorService', () => {
  let service: CardScoreCalculatorService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CardScoreCalculatorService],
    });

    service = TestBed.inject(CardScoreCalculatorService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve cards from the API', () => {
    const dummyCards: { cards: Card[] } = {
      cards: [{ card: 'Ace', suit: 'Hearts' }],
    };

    service.getCards().subscribe((cards) => {
      expect(cards.cards.length).toBe(1);
      expect(cards).toEqual(dummyCards);
    });

    const request = httpMock.expectOne(service.apiUrl);
    expect(request.request.method).toBe('GET');
    request.flush(dummyCards);
  });

  it('should submit calculation to the API and return the score', () => {
    const dummyCardList = ['Ace of Hearts', 'King of Diamonds'];
    const dummyScore = 25;

    service.submitCalculation(dummyCardList).subscribe((score) => {
      expect(score).toBe(dummyScore);
    });

    const request = httpMock.expectOne(service.postUrl);
    expect(request.request.method).toBe('POST');
    request.flush(dummyScore);
  });
});
