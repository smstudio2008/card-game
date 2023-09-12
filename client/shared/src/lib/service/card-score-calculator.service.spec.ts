import { TestBed, inject } from '@angular/core/testing';
import { CardScoreCalculatorService } from './card-score-calculator.service';

describe('Service: CardScoreCalculatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardScoreCalculatorService],
    });
  });

  it('should ...', inject(
    [CardScoreCalculatorService],
    (service: CardScoreCalculatorService) => {
      expect(service).toBeTruthy();
    }
  ));
});
