import { Component, ViewEncapsulation } from '@angular/core';
import { faBell, faFaceGrinTongue } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'tp-menu-panel',
  template: `
    <mat-toolbar class="user-toolbar">
      <button mat-button><fa-icon [icon]="notificationIcon"></fa-icon></button>
      <span class="spacer">|</span>
      <button class="user-button" color="accent" mat-button>
        <fa-icon [icon]="userIcon"></fa-icon>
        <span class="username">{{ userName }}</span>
      </button>
    </mat-toolbar>
  `,
  encapsulation: ViewEncapsulation.None
})
export class MenuPanelComponent {
  notificationIcon = faBell;
  userIcon = faFaceGrinTongue;
  userName = 'Madipta';
}
