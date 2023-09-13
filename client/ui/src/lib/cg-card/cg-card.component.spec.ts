import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CgCardComponent } from '../cg-card/cg-card.component';

describe('Given CgCardComponent as angular component', () => {
  let component: CgCardComponent;
  let fixture: ComponentFixture<CgCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CgCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CgCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default values', () => {
    expect(component.card).toBe('A');
    expect(component.suit).toBe('hearts');
    expect(component.isSelected).toBe(false);
  });

  it('should toggle card selection', () => {
    expect(component.isSelected).toBe(false);
    component.toggleSelection();
    expect(component.isSelected).toBe(true);
    component.toggleSelection();
    expect(component.isSelected).toBe(false);
  });

  it('should emit correct data when card is toggled', () => {
    component.cardToggle.emit = jest.fn();  // Mocking the emit method

    component.toggleSelection();

    expect(component.cardToggle.emit).toHaveBeenCalledWith({
      card: 'A',
      suit: 'hearts',
      selected: true,
    });
  });

  it('should accept input values and emit correct data when toggled', () => {
    component.card = 'K';
    component.suit = 'spades';
    fixture.detectChanges();

    component.cardToggle.emit = jest.fn();  // Mocking the emit method again

    component.toggleSelection();

    expect(component.cardToggle.emit).toHaveBeenCalledWith({
      card: 'K',
      suit: 'spades',
      selected: true,
    });
  });
});
