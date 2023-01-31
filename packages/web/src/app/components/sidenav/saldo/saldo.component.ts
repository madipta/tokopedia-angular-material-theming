import { Component, ViewEncapsulation } from '@angular/core';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { select, Store } from '@ngrx/store';
import { ThemesSelectors } from '@root/ui/app-state';

@Component({
  selector: 'tp-sidenav-saldo',
  template: `
    <ng-container *ngIf="isSideNavMinimize$ | async">
      <tp-sidenav-menu-item [icon]="logoIcon"></tp-sidenav-menu-item>
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
  encapsulation: ViewEncapsulation.None
})
export class SaldoComponent {
  isSideNavMinimize$ = this.store.pipe(
    select(ThemesSelectors.isSideNavMinimize)
  );
  logoIcon = faMoneyBill;

  constructor(private store: Store) {}
}
