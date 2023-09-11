import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CgCardComponent } from './cg-card.component';

describe('CgCardComponent', () => {
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
