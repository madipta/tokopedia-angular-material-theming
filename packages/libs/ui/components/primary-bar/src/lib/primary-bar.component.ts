import { Component, ViewEncapsulation } from '@angular/core';
import { MenuPanelComponent } from './menu-panel/menu-panel.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';

@Component({
  imports: [MenuPanelComponent, SearchPanelComponent],
  selector: 'ui-primary-bar',
  standalone: true,
  template: `
    <header>
      <h1 class="logo">Tokopedia <span>Seller</span></h1>
      <ui-search-panel></ui-search-panel>
      <ui-menu-panel></ui-menu-panel>
    </header>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class PrimaryBarComponent {}
