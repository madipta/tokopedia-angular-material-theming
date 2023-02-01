import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { ThemesSelectors } from '@root/ui/app-state';

@Component({
  imports: [CommonModule, FontAwesomeModule],
  selector: 'ui-sidenav-menu-item',
  standalone: true,
  template: `
    <div
      class="item"
      [ngClass]="{
        parent: hasChildMenu,
        minimize: this.minimize
      }"
      (click)="itemClick()"
    >
      <span class="wrapper" [ngClass]="{ active }">
        <fa-icon [icon]="icon" *ngIf="icon"></fa-icon>
        <span *ngIf="!minimize">{{ caption }}</span>
      </span>
      <fa-icon
        [icon]="moreIcon"
        class="more"
        [ngClass]="{ expand: expandable }"
        *ngIf="hasChildMenu && !minimize"
      ></fa-icon>
    </div>
    <div
      class="sub-menu"
      [ngClass]="{ expand: expandable }"
      *ngIf="hasChildMenu && !minimize"
    >
      <ng-content></ng-content>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class SideNavMenuItemComponent implements OnDestroy, OnInit {
  active = false;
  @Input() caption = '';
  expandable = false;
  @Input() hasChildMenu = false;
  @Input() icon?: IconProp;
  @Input() link: string | null = null;
  minimize = false;
  moreIcon = faAngleDown;
  destroy$ = new Subject<void>();

  itemClick() {
    if (!this.hasChildMenu) {
      this.router.navigate([this.link]);
    } else if (!this.minimize) {
      this.expandable = !this.expandable;
    } else {
      console.log('show popup menu');
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
