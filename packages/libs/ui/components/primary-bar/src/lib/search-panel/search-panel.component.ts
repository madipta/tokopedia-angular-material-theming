import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  imports: [FontAwesomeModule, MatButtonModule],
  selector: 'ui-search-panel',
  standalone: true,
  styleUrls: ['./search-panel.component.scss'],
  template: `
    <form>
      <input
        type="search"
        placeholder='Coba ketikkan "Bagaimana Cara Menjadi Official Store?"'
      />
      <button mat-button color="primary" class="search-button">
        <fa-icon [icon]="searchIcon"></fa-icon>
      </button>
    </form>
  `,
})
export class SearchPanelComponent {
  searchIcon = faSearch;
}
