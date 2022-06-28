import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { hot } from 'jasmine-marbles';
import { Observable } from 'rxjs';

import * as ThemesActions from './themes.actions';
import { ThemesEffects } from './themes.effects';

describe('ThemesEffects', () => {
  let actions: Observable<Action>;
  let effects: ThemesEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        ThemesEffects,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.inject(ThemesEffects);
  });

  describe('init$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: ThemesActions.init() });

      const expected = hot('-a-|', {
        a: ThemesActions.loadThemesSuccess({ themes: [] }),
      });

      expect(effects.init$).toBeObservable(expected);
    });
  });
});
