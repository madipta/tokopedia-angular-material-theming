import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tp-header',
  template: `
    <tp-info-bar></tp-info-bar>
    <tp-primary-bar></tp-primary-bar>
  `,
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent {}
