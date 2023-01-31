import { Component, ViewEncapsulation } from '@angular/core';
import { InfoBarComponent } from './info-bar/info-bar.component';
import { PrimaryBarComponent } from './primary-bar/primary-bar.component';

@Component({
  imports: [InfoBarComponent, PrimaryBarComponent],
  selector: 'tp-header',
  standalone: true,
  template: `
    <tp-info-bar></tp-info-bar>
    <tp-primary-bar></tp-primary-bar>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent {}
