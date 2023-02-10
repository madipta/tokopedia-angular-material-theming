import { CommonModule } from '@angular/common';
import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Subject, takeUntil } from 'rxjs';
import { SideNavService } from './sidenav.service';

@Component({
  imports: [CommonModule, FontAwesomeModule, MatButtonModule],
  selector: 'ui-sidenav',
  standalone: true,
  styleUrls: ['sidenav.component.scss'],
  template: `
    <nav class="sidenav">
      <button class="toggle" (click)="toggle()" mat-button>
        <fa-icon class="toggle-icon" icon="angle-left"></fa-icon>
        <span class="menu-text"> minimize </span>
      </button>
      <ng-content></ng-content>
    </nav>
  `,
})
export class SideNavComponent implements OnInit, OnDestroy {
  @HostBinding('class.min') minimize = false;
  destroy$ = new Subject<void>();

  constructor(private service: SideNavService) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  ngOnInit(): void {
    this.service.minimize$
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => (this.minimize = res));
  }

  toggle() {
    this.service.toggleSideNav();
  }
}
