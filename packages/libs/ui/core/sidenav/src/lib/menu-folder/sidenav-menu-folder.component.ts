import {
  Component,
  HostBinding,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Store, select } from '@ngrx/store';
import { ThemesSelectors } from '@/ui/app-state';
import { Subject, takeUntil } from 'rxjs';

@Component({
  imports: [CommonModule, FontAwesomeModule],
  selector: 'ui-sidenav-menu-folder',
  standalone: true,
  styleUrls: ['./sidenav-menu-folder.component.scss'],
  template: `
    <div class="folder" (click)="itemClick()">
      <span class="wrapper" [ngClass]="{ active }">
        <fa-icon [icon]="icon" *ngIf="icon"></fa-icon>
        <span>{{ caption }}</span>
      </span>
      <fa-icon
        icon="angle-down"
        class="more"
      ></fa-icon>
    </div>
    <div class="sub-menu" *ngIf="!minimize">
      <ng-content></ng-content>
    </div>
  `,
})
export class SideNavMenuFolderComponent implements OnDestroy, OnInit {
  @HostBinding('class.sidenav-menu-folder') base = true;
  @HostBinding('class.active') active = false;
  @HostBinding('class.expanded') expanded = false;
  @HostBinding('class.minimize') minimize = false;
  @Input() caption = '';
  @Input() icon?: IconProp;
  moreIcon = 'faAngleDown';
  destroy$ = new Subject<void>();

  itemClick() {
    this.expanded = !this.expanded;
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
