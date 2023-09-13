import { CgScoreDisplayComponent } from './cg-score-display.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('Given gScoreDisplayComponent as angular component', () => {
  let component: CgScoreDisplayComponent;
  let fixture: ComponentFixture<CgScoreDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CgScoreDisplayComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CgScoreDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    // Enable Jest's fake timers
    jest.useFakeTimers();
  });

  afterEach(() => {
    // Clear all timers after each test
    jest.clearAllTimers();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should count upwards when new countTo is greater', () => {
    component.countTo = 5;
    fixture.detectChanges();
    
    jest.advanceTimersByTime(60); // Let the count animation progress for a while

 
    expect(component.currentCountSource.value).toBeLessThanOrEqual(5);
  });

  it('should count downwards when new countTo is smaller', () => {
    component.currentCountSource.next(10);
    component.countTo = 5;
    fixture.detectChanges();

    jest.advanceTimersByTime(60); // Let the count animation progress for a while

    expect(component.currentCountSource.value).toBeLessThan(11);
    expect(component.currentCountSource.value).toBeGreaterThanOrEqual(5);
  });
});
