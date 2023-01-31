import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tp-primary-bar',
  template: `
    <header>
      <h1 class="logo">Tokopedia <span>Seller</span></h1>
      <tp-search-panel></tp-search-panel>
      <tp-menu-panel></tp-menu-panel>
    </header>
  `,
  encapsulation: ViewEncapsulation.None
})
export class PrimaryBarComponent {}
