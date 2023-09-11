import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CgCardComponent } from './cg-card/cg-card.component';
import { CgButtonComponent } from './cg-button/cg-button.component';
import { CgNavComponent } from './cg-nav/cg-nav.component';
import { CgScoreDisplayComponent } from './cg-score-display/cg-score-display.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CgCardComponent,
    CgButtonComponent,
    CgNavComponent,
    CgScoreDisplayComponent,
  ],
  exports: [
    CgCardComponent,
    CgButtonComponent,
    CgNavComponent,
    CgScoreDisplayComponent,
  ],
})
export class UiModule {}
