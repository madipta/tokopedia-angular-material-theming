import { ThemesEntity } from './themes.models';
import {
  themesAdapter,
  ThemesPartialState,
  initialState,
} from './themes.reducer';
import * as ThemesSelectors from './themes.selectors';

describe('Themes Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getThemesId = (it: ThemesEntity) => it.id;
  const createThemesEntity = (id: string, name = '') =>
    ({
      id,
      name: name || `name-${id}`,
    } as ThemesEntity);

  let state: ThemesPartialState;

  beforeEach(() => {
    state = {
      themes: themesAdapter.setAll(
        [
          createThemesEntity('PRODUCT-AAA'),
          createThemesEntity('PRODUCT-BBB'),
          createThemesEntity('PRODUCT-CCC'),
        ],
        {
          ...initialState,
          selectedId: 'PRODUCT-BBB',
          error: ERROR_MSG,
          loaded: true,
        }
      ),
    };
  });

  describe('Themes Selectors', () => {
    it('getAllThemes() should return the list of Themes', () => {
      const results = ThemesSelectors.getAllThemes(state);
      const selId = getThemesId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelected() should return the selected Entity', () => {
      const result = ThemesSelectors.getSelected(state) as ThemesEntity;
      const selId = getThemesId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getThemesLoaded() should return the current "loaded" status', () => {
      const result = ThemesSelectors.getThemesLoaded(state);

      expect(result).toBe(true);
    });

    it('getThemesError() should return the current "error" state', () => {
      const result = ThemesSelectors.getThemesError(state);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
