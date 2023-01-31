import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromThemes from './+state/themes.reducer';
import { ThemesEffects } from './+state/themes.effects';

@NgModule({
  imports: [
    StoreModule.forFeature(fromThemes.THEMES_FEATURE_KEY, fromThemes.reducer),
    EffectsModule.forFeature([ThemesEffects]),
  ],
})
export class UiAppStateModule {}
