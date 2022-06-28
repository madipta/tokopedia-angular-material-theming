import { createAction, props } from '@ngrx/store';

export enum ThemesActionTypes {
  Init = '[Themes] Init',
  ChangeTheme = '[Themes] Change Theme',
  ToggleSideNav = '[Themes] Toggle SideNav',
};

export const init = createAction(
  ThemesActionTypes.Init
);

export const changeTheme = createAction(
  ThemesActionTypes.ChangeTheme,
  props<{ theme: string }>()
);

export const toggleSideNav = createAction(
  ThemesActionTypes.ToggleSideNav,
  props<{ sidenavMinimize: boolean }>()
);
