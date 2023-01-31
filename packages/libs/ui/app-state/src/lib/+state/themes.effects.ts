import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs/operators';

import * as ThemesActions from './themes.actions';

@Injectable()
export class ThemesEffects {
  init$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ThemesActions.init),
        tap(() => {
          const theme = localStorage.getItem('theme') || 'light';
          this.store.dispatch(ThemesActions.changeTheme({ theme }));
          const sidenavMinimize =
            localStorage.getItem('sidenavMinimize') === 'min';
          this.store.dispatch(ThemesActions.toggleSideNav({ sidenavMinimize }));
        })
      ),
    {
      dispatch: false,
    }
  );

  changeTheme$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ThemesActions.changeTheme),
        tap(({ theme }) => {
          localStorage.setItem('theme', theme);
        })
      ),
    {
      dispatch: false,
    }
  );

  toggleSideNav$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ThemesActions.toggleSideNav),
        tap(({ sidenavMinimize }) => {
          localStorage.setItem(
            'sidenavMinimize',
            sidenavMinimize ? 'min' : 'max'
          );
        })
      ),
    {
      dispatch: false,
    }
  );

  constructor(private readonly actions$: Actions, private store: Store) {}
}
