import { CommonModule } from '@angular/common';
import {
  Component,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewEncapsulation,
} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faCamera,
  faMoon,
  faMobileScreen,
  faSun,
  faTv,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { select, Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { ThemesActions, ThemesSelectors } from '@root/ui/app-state';

@Component({
  imports: [CommonModule, FontAwesomeModule],
  selector: 'ui-info-bar',
  standalone: true,
  template: `
    <nav>
      <ul class="left">
        <li class="mobile-app">
          <fa-icon [icon]="mobileIcon"></fa-icon>
          <a class="download-link">Download Tokopedia App</a>
        </li>
        <li class="theme-selector">
          <span class="title">Themes:</span>
          <fa-icon
            [icon]="darkIcon"
            *ngIf="isDark"
            (click)="toggleTheme('light')"
          ></fa-icon>
          <fa-icon
            [icon]="lightIcon"
            *ngIf="!isDark"
            (click)="toggleTheme('dark')"
          ></fa-icon>
        </li>
      </ul>
      <ul class="right">
        <li>
          <a class="text-link">Hak Kekayaan Intelektual</a>
        </li>
        <li>
          <a class="text-link">Mitra</a>
        </li>
        <li>
          <span class="title">Media Sosial</span>
          <a><fa-icon [icon]="videoIcon"></fa-icon></a>
          <a><fa-icon [icon]="cameraIcon"></fa-icon></a>
          <a><fa-icon [icon]="socialIcon"></fa-icon></a>
        </li>
      </ul>
    </nav>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class InfoBarComponent implements OnInit, OnDestroy {
  cameraIcon = faCamera;
  darkIcon = faMoon;
  isDark = false;
  lightIcon = faSun;
  mobileIcon = faMobileScreen;
  socialIcon = faUser;
  theme = 'light';
  themes$ = this.store.pipe(select(ThemesSelectors.getSelectedTheme));
  unsubscribe$ = new Subject<void>();
  videoIcon = faTv;

  constructor(private renderer: Renderer2, private store: Store) {}

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngOnInit(): void {
    this.themes$.subscribe((res) => {
      this.changeTheme(res);
    });
  }

  changeTheme(theme: string) {
    const oldThemeClass = this.theme + '-theme';
    this.renderer.removeClass(document.body, oldThemeClass);
    this.theme = theme;
    const newThemeClass = theme + '-theme';
    this.isDark = this.theme === 'dark';
    this.renderer.addClass(document.body, newThemeClass);
  }

  toggleTheme(theme: string) {
    this.store.dispatch(ThemesActions.changeTheme({ theme }));
  }
}
