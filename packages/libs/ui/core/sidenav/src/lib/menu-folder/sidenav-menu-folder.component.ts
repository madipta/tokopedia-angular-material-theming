import {
  Component,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Store, select } from '@ngrx/store';
import { ThemesSelectors } from '@/ui/app-state';
import { Subject, takeUntil } from 'rxjs';
import { ISideNavMenu } from '../interfaces';
import { SideNavMenuDividerComponent } from '../menu-divider/sidenav-menu-divider.component';
import { SideNavMenuItemComponent } from '../menu-item/sidenav-menu-item.component';

@Component({
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatMenuModule,
    SideNavMenuDividerComponent,
    SideNavMenuItemComponent,
  ],
  selector: 'ui-sidenav-menu-folder',
  standalone: true,
  styleUrls: ['./sidenav-menu-folder.component.scss'],
  template: `
    <div class="folder" (click)="itemClick()">
      <span class="wrapper" [ngClass]="{ active }">
        <fa-icon [icon]="icon" *ngIf="icon"></fa-icon>
        <span class="folder-caption">{{ caption }}</span>
      </span>
      <fa-icon icon="angle-down" class="more"></fa-icon>
      <div
        #menuTrigger="matMenuTrigger" 
        [matMenuTriggerFor]="menu" 
        style="position:absolute;right:0;top:0;"></div>
      <mat-menu #menu="matMenu">
        <ng-container *ngFor="let item of children">
          <ui-sidenav-menu-divider *ngIf="item.type === 'Divider'" />
          <ui-sidenav-menu-folder 
            *ngIf="item.type === 'Folder'"
            [caption]="item.caption!"
            [children]="item.children!"
            [icon]="item.icon">
          </ui-sidenav-menu-folder>
          <ui-sidenav-menu-item 
            *ngIf="item.type === 'Item'" 
            [caption]="item.caption!" 
            [icon]="item.icon" 
            [link]="item.link" />
        </ng-container>
      </mat-menu>
    </div>
    <div class="sub-menu" *ngIf="!minimize">
      <ng-container *ngFor="let item of children">
        <ui-sidenav-menu-divider *ngIf="item.type === 'Divider'" />
        <ui-sidenav-menu-folder 
          *ngIf="item.type === 'Folder'"
          [caption]="item.caption!"
          [children]="item.children!"
          [icon]="item.icon">
        </ui-sidenav-menu-folder>
        <ui-sidenav-menu-item 
          *ngIf="item.type === 'Item'" 
          [caption]="item.caption!" 
          [icon]="item.icon" 
          [link]="item.link" />
      </ng-container>
    </div>
  `,
})
export class SideNavMenuFolderComponent implements OnDestroy, OnInit {
  @HostBinding('class.sidenav-menu-folder') base = true;
  @HostBinding('class.active') active = false;
  @HostBinding('class.expanded') expanded = false;
  @HostBinding('class.minimize') minimize = false;
  @Input() caption = '';
  @Input() children: ISideNavMenu[] = [];
  @Input() icon?: IconProp;
  @ViewChild('menuTrigger') trigger!: MatMenuTrigger;
  moreIcon = 'faAngleDown';
  destroy$ = new Subject<void>();

  itemClick() {
    this.expanded = !this.expanded;
    if (this.minimize) {
      this.trigger.openMenu();
    }
  }

  constructor(private router: Router, private store: Store) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  ngOnInit(): void {
    this.store
      .pipe(takeUntil(this.destroy$))
      .pipe(select(ThemesSelectors.isSideNavMinimize))
      .subscribe((res) => {
        this.minimize = res;
      });
  }
}
