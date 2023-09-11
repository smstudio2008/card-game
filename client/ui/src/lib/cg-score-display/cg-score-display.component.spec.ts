import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CgScoreDisplayComponent } from './cg-score-display.component';

describe('CgScoreDisplayComponent', () => {
  let component: CgScoreDisplayComponent;
  let fixture: ComponentFixture<CgScoreDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CgScoreDisplayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CgScoreDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
