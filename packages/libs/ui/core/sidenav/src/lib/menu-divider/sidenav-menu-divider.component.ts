import { Component } from '@angular/core';

@Component({
  selector: 'ui-sidenav-menu-divider',
  standalone: true,
  styles: [
    `
      :host {
        border-top-style: solid;
        border-top-width: 1px;
        display: block;
        height: 0px;
        margin: 16px;
        overflow: hidden;
      }
    `,
  ],
  template: `-`,
})
export class SideNavMenuDividerComponent {}
