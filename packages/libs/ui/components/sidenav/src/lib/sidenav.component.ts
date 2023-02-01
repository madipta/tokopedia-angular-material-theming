import { CommonModule } from '@angular/common';
import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { select, Store } from '@ngrx/store';
import { Subject, takeUntil } from 'rxjs';
import { ThemesActions, ThemesSelectors } from '@root/ui/app-state';

@Component({
  imports: [CommonModule, FontAwesomeModule, MatButtonModule],
  selector: 'ui-sidenav',
  standalone: true,
  styleUrls: ['sidenav.component.scss'],
  template: `
    <nav class="sidenav">
      <button class="toggle" (click)="toggle()" mat-button>
        <fa-icon class="toggle-icon" [icon]="toggleIcon"></fa-icon>
        <span class="menu-text"> minimize </span>
      </button>
      <ng-content></ng-content>
    </nav>
  `,
})
export class SideNavComponent implements OnInit, OnDestroy {
  @HostBinding('class.min') get hostMinimize() {
    return this.minimize;
  }
  destroy$ = new Subject<void>();
  minimize = false;
  toggleIcon = faAngleLeft;

  constructor(private store: Store) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.store
      .pipe(select(ThemesSelectors.isSideNavMinimize))
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.minimize = res;
      });
  }

  toggle() {
    this.store.dispatch(
      ThemesActions.toggleSideNav({ sidenavMinimize: !this.minimize })
    );
  }
}
