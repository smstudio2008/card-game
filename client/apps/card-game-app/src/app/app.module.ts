import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { UiModule } from '@card-game/ui';
import { PlayCardViewComponent } from './components/play-card-view/play-card-view.component';
import { SharedModule } from '@card-game/shared';
@NgModule({
  declarations: [AppComponent, PlayCardViewComponent],
  imports: [
    BrowserModule,
    UiModule,
    SharedModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
