import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { ChatToolbarComponent } from '@root/ui/components/chat-toolbar';
import { InfoBarComponent } from '@root/ui/components/info-bar';
import { PrimaryBarComponent } from '@root/ui/components/primary-bar';
import { ThemesActions } from '@root/ui/app-state';
import { SideNavComponent } from '@root/ui/components/sidenav';
import { SideNavMenuComponent } from './components/menu/menu.component';

@Component({
  encapsulation: ViewEncapsulation.None,
  imports: [
    ChatToolbarComponent,
    InfoBarComponent,
    PrimaryBarComponent,
    RouterOutlet,
    SideNavComponent,
    SideNavMenuComponent,
  ],
  selector: 'tp-root',
  standalone: true,
  template: `
    <header>
      <ui-info-bar></ui-info-bar>
      <ui-primary-bar></ui-primary-bar>
    </header>
    <section class="main">
      <ui-sidenav>
        <tp-sidenav-menu></tp-sidenav-menu>
      </ui-sidenav>
      <main>
        <router-outlet></router-outlet>
      </main>
    </section>
    <ui-chat-toolbar></ui-chat-toolbar>
  `,
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(ThemesActions.init());
  }
}
