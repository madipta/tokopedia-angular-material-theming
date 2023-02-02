import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { ThemesActions } from '@/ui/app-state';
import { ChatToolbarComponent } from '@/ui/components/chat-toolbar';
import { InfoBarComponent } from '@/ui/components/info-bar';
import { PrimaryBarComponent } from '@/ui/components/primary-bar';
import { DashboardComponent, StickyBarDirective } from '@/ui/core/dashboard';
import { SideNavMenuComponent } from './components/menu/menu.component';

@Component({
  imports: [
    StickyBarDirective,
    ChatToolbarComponent,
    InfoBarComponent,
    PrimaryBarComponent,
    RouterOutlet,
    SideNavMenuComponent,
    DashboardComponent,
  ],
  selector: 'tp-root',
  standalone: true,
  template: `
    <ui-dashboard>
      <section header>
        <ui-info-bar></ui-info-bar>
        <ui-primary-bar></ui-primary-bar>
      </section>
      <section sidenav>
        <tp-sidenav-menu></tp-sidenav-menu>
      </section>
      <router-outlet></router-outlet>
      <div uiStickyBar="bottom">
        <ui-chat-toolbar></ui-chat-toolbar>
      </div>
    </ui-dashboard>
  `,
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(ThemesActions.init());
  }
}
