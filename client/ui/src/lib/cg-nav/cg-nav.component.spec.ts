import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CgNavComponent } from './cg-nav.component';

describe('CgNavComponent', () => {
  let component: CgNavComponent;
  let fixture: ComponentFixture<CgNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CgNavComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CgNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
