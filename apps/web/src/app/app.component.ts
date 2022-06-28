import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Store } from '@ngrx/store';
import { ThemesActions } from '@root/ui/app-state';

@Component({
  selector: 'tp-root',
  template: `
    <tp-header></tp-header>
    <tp-sidenav></tp-sidenav>
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(ThemesActions.init());
  }
}
