import { CgCardComponent } from './cg-card.component';

import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('Given CgCardComponent as angular component', () => {
  let component: CgCardComponent;
  let fixture: ComponentFixture<CgCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CgCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CgCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have default card and suit values', () => {
    expect(component.card).toBe('A');
    expect(component.suit).toBe('hearts');
  });

  it('should toggle card selection and emit an event', () => {
    const spy = jest.spyOn(component.cardToggle, 'emit');

    component.toggleSelection();

    expect(component.isSelected).toBeTruthy();
    expect(spy).toHaveBeenCalledWith({
      cardRepresentation: 'AH',
      selected: true,
    });

    component.toggleSelection();

    expect(component.isSelected).toBeFalsy();
    expect(spy).toHaveBeenCalledWith({
      cardRepresentation: 'AH',
      selected: false,
    });
  });

  it('should deselect card', () => {
    component.isSelected = true;

    component.deselectCard();

    expect(component.isSelected).toBeFalsy();
  });

  it('should give correct card representation', () => {
    component.card = 'Q';
    component.suit = 'diamonds';

    const cardRepresentation = component['getCardRepresentation']();

    expect(cardRepresentation).toBe('QD');
  });

  it('should give correct representation for JOKER', () => {
    component.card = 'JOKER';

    const cardRepresentation = component['getCardRepresentation']();

    expect(cardRepresentation).toBe('JK');
  });

  it('should give correct representation for card 10', () => {
    component.card = '10';
    component.suit = 'clubs';

    const cardRepresentation = component['getCardRepresentation']();

    expect(cardRepresentation).toBe('TC');
  });
});
