import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import { ThemesActions } from '@root/ui/app-state';
import { ChatToolbarComponent } from './components/chat-toolbar/chat-toolbar.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavComponent } from './components/sidenav/sidenav.component';

@Component({
  imports: [
    ChatToolbarComponent,
    HeaderComponent,
    RouterOutlet,
    SideNavComponent,
  ],
  selector: 'tp-root',
  standalone: true,
  template: `
    <section class="main">
      <tp-header></tp-header>
      <tp-sidenav></tp-sidenav>
      <main>
        <router-outlet></router-outlet>
      </main>
    </section>
    <section class="footer">
      <tp-chat-toolbar></tp-chat-toolbar>
    </section>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(ThemesActions.init());
  }
}
