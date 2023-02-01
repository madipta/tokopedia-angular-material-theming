import { CommonModule } from '@angular/common';
import {
  Component,
  HostBinding,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
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
  template: `
    <nav class="sidenav">
      <button class="toggle" (click)="toggle()" mat-button>
        <fa-icon class="toggle-icon" [icon]="toggleIcon"></fa-icon>
        <span class="menu-text"> Sembunyikan Menu </span>
      </button>
      <ng-content></ng-content>
    </nav>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class SideNavComponent implements OnInit, OnDestroy {
  @HostBinding('class.min') get hostMinimize() { return this.minimize; }
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
