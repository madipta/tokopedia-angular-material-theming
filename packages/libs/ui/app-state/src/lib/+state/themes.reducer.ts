import { Action, createReducer, on } from '@ngrx/store';

import * as ThemesActions from './themes.actions';
import { ThemesState } from './themes.models';

export const THEMES_FEATURE_KEY = 'Themes';

export const initialState: ThemesState = {
  theme: 'light',
  sidenavMinimize: false,
};

export const themesReducer = createReducer(
  initialState,
  on(ThemesActions.changeTheme, (state, { theme }) => ({ ...state, theme })),
  on(ThemesActions.toggleSideNav, (state, { sidenavMinimize }) => ({
    ...state,
    sidenavMinimize,
  }))
);

export function reducer(state: ThemesState | undefined, action: Action) {
  return themesReducer(state, action);
}
