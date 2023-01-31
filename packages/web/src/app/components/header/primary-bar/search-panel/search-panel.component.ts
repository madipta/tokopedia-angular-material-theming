import { Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  imports: [FontAwesomeModule, MatButtonModule],
  selector: 'tp-search-panel',
  standalone: true,
  template: `
    <form>
      <input type="search" placeholder='Coba ketikkan "Bagaimana Cara Menjadi Official Store?"'>
      <button mat-button color="primary" class="search-button"><fa-icon [icon]="searchIcon"></fa-icon></button>
    </form>
  `,
  encapsulation: ViewEncapsulation.None
})
export class SearchPanelComponent {
  searchIcon = faSearch;
}
