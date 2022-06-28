import { Component, Input, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { ThemesSelectors } from '@root/ui/app-state';
import { Router } from '@angular/router';

@Component({
  selector: 'tp-sidenav-menu-item',
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
  encapsulation: ViewEncapsulation.None
})
export class SideNavMenuItemComponent implements OnDestroy, OnInit {
  active = false;
  @Input() caption = '';
  expandable = false;
  @Input() hasChildMenu = false;
  @Input() icon?: IconProp;
  @Input() link: string | null = null;
  minimize = false;
  minimize$ = this.store.pipe(select(ThemesSelectors.isSideNavMinimize));
  moreIcon = faAngleDown;
  unsubscribe$ = new Subject<void>();

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
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngOnInit(): void {
    this.minimize$.subscribe((res) => {
      this.minimize = res;
    });
  }
}
