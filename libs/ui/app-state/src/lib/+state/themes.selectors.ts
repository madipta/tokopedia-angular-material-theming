import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ThemesState } from './themes.models';
import { THEMES_FEATURE_KEY } from './themes.reducer';

export const getThemes = createFeatureSelector<ThemesState>(THEMES_FEATURE_KEY);

export const getSelectedTheme = createSelector(getThemes, (state) => state.theme);
export const isSideNavMinimize = createSelector(getThemes, (state) => state.sidenavMinimize);
