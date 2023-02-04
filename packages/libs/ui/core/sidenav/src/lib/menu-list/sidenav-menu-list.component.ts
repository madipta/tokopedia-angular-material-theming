import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { SideNavMenuDividerComponent } from '../menu-divider/sidenav-menu-divider.component';
import { SideNavMenuFolderComponent } from '../menu-folder/sidenav-menu-folder.component';
import { SideNavMenuItemComponent } from '../menu-item/sidenav-menu-item.component';

export interface ISideNavMenu {
  type: 'Divider' | 'Folder' | 'Item';
  active?: boolean;
  caption?: string;
  icon?: IconProp;
  link?: string;
  children?: ISideNavMenu[];
}

@Component({
  imports: [
    CommonModule,
    SideNavMenuDividerComponent,
    SideNavMenuFolderComponent,
    SideNavMenuItemComponent,
  ],
  selector: 'ui-sidenav-menu-list',
  standalone: true,
  template: `
    <ng-container *ngFor="let item of config">
      <ui-sidenav-menu-divider *ngIf="item.type === 'Divider'" />
      <ui-sidenav-menu-folder 
        *ngIf="item.type === 'Folder'"
        [caption]="item.caption!"
        [icon]="item.icon">
        <ui-sidenav-menu-list [config]="item.children!" />
      </ui-sidenav-menu-folder>
      <ui-sidenav-menu-item 
        *ngIf="item.type === 'Item'" 
        [caption]="item.caption!" 
        [icon]="item.icon" 
        [link]="item.link" />
    </ng-container>
  `,
})
export class SideNavMenuListComponent {
  @Input() config: ISideNavMenu[] = [];
}
