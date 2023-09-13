import { CgButtonComponent } from './cg-button.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

describe('Given CgButtonComponent as angular component', () => {
  let component: CgButtonComponent;
  let fixture: ComponentFixture<CgButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CgButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CgButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default values', () => {
    expect(component.buttonLabel).toBe('Button');
    expect(component.buttonStyle).toBe('primary');
  });

  it('should accept input values', () => {
    component.buttonLabel = 'Test Button';
    component.buttonStyle = 'secondary';
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(
      By.css('button')
    ).nativeElement;

    expect(buttonElement.textContent).toContain('Test Button');
    expect(buttonElement.classList).toContain('secondary');
    expect(buttonElement.classList).not.toContain('primary');
  });
});
