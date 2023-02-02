import { CommonModule } from '@angular/common';
import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faClock,
  faShop,
  faStar,
  faUserCheck,
} from '@fortawesome/free-solid-svg-icons';
import { select, Store } from '@ngrx/store';
import { ThemesSelectors } from '@/ui/app-state';
import { Subject, takeUntil } from 'rxjs';

@Component({
  imports: [CommonModule, FontAwesomeModule],
  selector: 'ui-shop-info',
  standalone: true,
  styleUrls: ['shop-info.component.scss'],
  template: `
    <div class="shop-link">
      <div class="logo">
        <fa-icon class="shop-icon" [icon]="shopIcon"></fa-icon>
      </div>
      <div class="info" *ngIf="!minimize">
        <div class="name">
          <a>{{ shopName }}</a>
        </div>
        <div class="points">
          <fa-icon class="star-icon" [icon]="starIcon"></fa-icon>
          <fa-icon class="star-icon" [icon]="starIcon"></fa-icon>
          <fa-icon class="star-icon" [icon]="starIcon"></fa-icon>
          <fa-icon class="star-icon" [icon]="starIcon"></fa-icon>
          <div class="divider">|</div>
          <fa-icon class="followers-icon" [icon]="followersIcon"></fa-icon>
          <span>{{ followersCount }}</span>
        </div>
      </div>
    </div>
    <div class="merchant" *ngIf="!minimize">
      <div class="status">
        <span>Regular Merchant</span>
        <a>Upgrade</a>
      </div>
      <div class="trans">
        <span>Transaksi sejak 14 juni 2021</span>
        <span>15/100</span>
      </div>
    </div>
    <div class="hours" *ngIf="!minimize">
      <h4>Toko Buka</h4>
      <span>
        <fa-icon class="clock-icon" [icon]="clockIcon"></fa-icon>
        <a>24 Jam</a>
      </span>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class ShopInfoComponent implements OnInit, OnDestroy {
  clockIcon = faClock;
  followersIcon = faUserCheck;
  minimize = false;
  shopIcon = faShop;
  starIcon = faStar;
  destroy$ = new Subject<void>();
  followersCount = 12;
  shopName = 'Waroeng IT';

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private store: Store
  ) {}

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  ngOnInit(): void {
    this.store
      .pipe(takeUntil(this.destroy$))
      .pipe(select(ThemesSelectors.isSideNavMinimize))
      .subscribe((res) => {
        this.changeSideNav(res);
      });
  }

  changeSideNav(minimize: boolean) {
    const el = this.elRef.nativeElement;
    this.renderer.removeClass(el, this.minimize ? 'min' : 'max');
    this.minimize = minimize;
    this.renderer.addClass(el, this.minimize ? 'min' : 'max');
  }
}
