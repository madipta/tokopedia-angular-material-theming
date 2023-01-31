import { Action } from '@ngrx/store';

import * as ThemesActions from './themes.actions';
import { ThemesEntity } from './themes.models';
import { State, initialState, reducer } from './themes.reducer';

describe('Themes Reducer', () => {
  const createThemesEntity = (id: string, name = ''): ThemesEntity => ({
    id,
    name: name || `name-${id}`,
  });

  describe('valid Themes actions', () => {
    it('loadThemesSuccess should return the list of known Themes', () => {
      const themes = [
        createThemesEntity('PRODUCT-AAA'),
        createThemesEntity('PRODUCT-zzz'),
      ];
      const action = ThemesActions.loadThemesSuccess({ themes });

      const result: State = reducer(initialState, action);

      expect(result.loaded).toBe(true);
      expect(result.ids.length).toBe(2);
    });
  });

  describe('unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as Action;

      const result = reducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
