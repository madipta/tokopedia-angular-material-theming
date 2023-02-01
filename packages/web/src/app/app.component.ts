import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { ThemesActions } from '@root/ui/app-state';
import { ChatToolbarComponent } from '@root/ui/components/chat-toolbar';
import { DashboardComponent } from '@root/ui/components/dashboard';
import { InfoBarComponent } from '@root/ui/components/info-bar';
import { SideNavMenuComponent } from './components/menu/menu.component';
import { PrimaryBarComponent } from '@root/ui/components/primary-bar';

@Component({
  imports: [
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
      <ui-chat-toolbar></ui-chat-toolbar>
    </ui-dashboard>
  `,
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(ThemesActions.init());
  }
}
