import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CgFooterComponent } from './cg-footer.component';

describe('CgFooterComponent', () => {
  let component: CgFooterComponent;
  let fixture: ComponentFixture<CgFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CgFooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CgFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
