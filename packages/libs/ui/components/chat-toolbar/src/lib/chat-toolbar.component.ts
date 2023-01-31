import { Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faMessage,
  faStar,
  faWheelchair,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  encapsulation: ViewEncapsulation.None,
  imports: [FontAwesomeModule, MatButtonModule],
  selector: 'ui-chat-toolbar',
  standalone: true,
  template: `
    <button mat-button>
      <fa-icon [icon]="chatIcon"></fa-icon>
      <span class="chat-text">Chat</span>
    </button>
    <button mat-button><fa-icon [icon]="helpIcon"></fa-icon></button>
    <span class="spacer">|</span>
    <button mat-button><fa-icon [icon]="ratingIcon"></fa-icon></button>
  `
})
export class ChatToolbarComponent {
  chatIcon = faMessage;
  helpIcon = faWheelchair;
  ratingIcon = faStar;
}
