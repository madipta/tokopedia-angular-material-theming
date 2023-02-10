import { CommonModule } from '@angular/common';
import {
  Component,
  HostBinding,
  OnDestroy,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { SideNavComponent, SideNavService } from '@/ui/core/sidenav';
import { Subject, takeUntil } from 'rxjs';

@Component({
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, SideNavComponent],
  selector: 'ui-dashboard',
  standalone: true,
  styleUrls: ['./dashboard.component.scss'],
  template: `
    <header>
      <ng-content select="[header]"></ng-content>
    </header>
    <ui-sidenav><ng-content select="[sidenav]"></ng-content></ui-sidenav>
    <main>
      <section class="main-content">
        <ng-content></ng-content>
      </section>
    </main>
  `,
})
export class DashboardComponent implements OnInit, OnDestroy {
  @HostBinding('class.min') minimize = true;
  destroy$ = new Subject<void>();

  constructor(private sideNavService: SideNavService) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  ngOnInit(): void {
    this.sideNavService.minimize$
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.minimize = !res;
      });
  }
}
