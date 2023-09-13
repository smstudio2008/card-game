import { Component, OnChanges, Input } from '@angular/core';
import { BehaviorSubject, interval, map, takeWhile } from 'rxjs';

@Component({
  selector: 'card-game-temp-display',
  templateUrl: './cg-score-display.component.html',
  styleUrls: ['./cg-score-display.component.scss'],
})
export class CgScoreDisplayComponent implements OnChanges {
  @Input() public countTo = 0;

  public currentCountSource = new BehaviorSubject<number>(0);
  public currentCount$ = this.currentCountSource.asObservable();

  public ngOnChanges(): void {
    this.animateCount();
  }

  private animateCount(): void {
    const step = this.countTo > this.currentCountSource.value ? 1 : -1;

    interval(10)
      .pipe(
        map(() => this.currentCountSource.value + step),
        takeWhile((val) =>
          step > 0 ? val <= this.countTo : val >= this.countTo
        )
      )
      .subscribe((val) => {
        this.currentCountSource.next(val);
      });
  }
}
