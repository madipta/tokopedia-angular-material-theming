import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { select, Store } from '@ngrx/store';
import { ThemesSelectors } from '@/ui/app-state';
import { SideNavMenuItemComponent } from '@/ui/core/sidenav';

@Component({
  imports: [CommonModule, SideNavMenuItemComponent],
  selector: 'ui-sidenav-saldo-info',
  standalone: true,
  styleUrls: ['saldo-info.component.scss'],
  template: `
    <ng-container *ngIf="isSideNavMinimize$ | async">
      <ui-sidenav-menu-item [icon]="logoIcon"></ui-sidenav-menu-item>
    </ng-container>
    <ng-container *ngIf="(isSideNavMinimize$ | async) === false">
      <div class="saldo">
        <h4>Saldo</h4>
        <span>Rp267.038</span>
      </div>
      <div class="saldo">
        <h4>Kredit TopAds</h4>
        <span>Rp0</span>
      </div>
    </ng-container>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class SaldoInfoComponent {
  isSideNavMinimize$ = this.store.pipe(
    select(ThemesSelectors.isSideNavMinimize)
  );
  logoIcon = faMoneyBill;

  constructor(private store: Store) {}
}
