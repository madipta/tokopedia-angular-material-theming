import { Component, ViewEncapsulation } from '@angular/core';
import { MenuPanelComponent } from './menu-panel/menu-panel.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';

@Component({
  imports: [MenuPanelComponent, SearchPanelComponent],
  selector: 'tp-primary-bar',
  standalone: true,
  template: `
    <header>
      <h1 class="logo">Tokopedia <span>Seller</span></h1>
      <tp-search-panel></tp-search-panel>
      <tp-menu-panel></tp-menu-panel>
    </header>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class PrimaryBarComponent {}
