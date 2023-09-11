import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CgButtonComponent } from './cg-button.component';

describe('CgButtonComponent', () => {
  let component: CgButtonComponent;
  let fixture: ComponentFixture<CgButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CgButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CgButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
