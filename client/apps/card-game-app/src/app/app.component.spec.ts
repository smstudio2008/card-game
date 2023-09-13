import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '@card-game/shared';
import { UiModule } from '@card-game/ui';
import { PlayCardViewComponent } from './components/play-card-view/play-card-view.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule, SharedModule, UiModule],

      declarations: [AppComponent,PlayCardViewComponent],
    }).compileComponents();
  });

  it(`should have as title 'card-game-app'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
  });
});
