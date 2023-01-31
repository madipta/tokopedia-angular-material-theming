import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';
import { select, Store } from '@ngrx/store';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import { Subject } from 'rxjs';
import { ThemesActions, ThemesSelectors } from '@root/ui/app-state';
import { SideNavMenuComponent } from './menu/menu.component';
import { SaldoComponent } from './saldo/saldo.component';
import { ShopInfoComponent } from './shop-info/shop-info.component';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';

@Component({
  imports: [
    CommonModule,
    FontAwesomeModule,
    MatButtonModule,
    SaldoComponent,
    ShopInfoComponent,
    SideNavMenuComponent,
  ],
  selector: 'tp-sidenav',
  standalone: true,
  template: `
    <nav class="sidenav">
      <button class="toggle" (click)="toggle()" mat-button>
        <fa-icon
          class="toggle-icon"
          [icon]="toggleIcon"
          [ngClass]="{ hide: minimize }"
        ></fa-icon>
        <span class="menu-text" [ngClass]="{ hide: minimize }">
          Sembunyikan Menu
        </span>
      </button>
      <tp-shop-info></tp-shop-info>
      <tp-sidenav-saldo></tp-sidenav-saldo>
      <tp-sidenav-menu></tp-sidenav-menu>
    </nav>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class SideNavComponent implements OnInit, OnDestroy {
  isSideNavMinimize$ = this.store.pipe(
    select(ThemesSelectors.isSideNavMinimize)
  );
  minimize = false;
  toggleIcon = faAngleLeft;
  unsubscribe$ = new Subject<void>();

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private store: Store
  ) {}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngOnInit(): void {
    this.isSideNavMinimize$.subscribe((res) => {
      this.changeSideNav(res);
    });
  }

  changeSideNav(minimize: boolean) {
    const el = this.elRef.nativeElement;
    this.renderer.removeClass(el, this.minimize ? 'min' : 'max');
    this.minimize = minimize;
    this.renderer.addClass(el, this.minimize ? 'min' : 'max');
  }

  toggle() {
    this.store.dispatch(
      ThemesActions.toggleSideNav({ sidenavMinimize: !this.minimize })
    );
  }
}
