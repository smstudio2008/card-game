import { ComponentFixture, TestBed, async } from '@angular/core/testing';


import { PlayCardViewComponent } from './play-card-view.component';

describe('PlayCardViewComponent', () => {
  let component: PlayCardViewComponent;
  let fixture: ComponentFixture<PlayCardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayCardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
