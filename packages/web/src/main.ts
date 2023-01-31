import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { ThemesFeature } from '@root/ui/app-state';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.router';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(RouterModule.forRoot(appRoutes)),
    provideAnimations(),
    provideStore({ Themes: ThemesFeature.themesReducer }),
    provideRouterStore(),
    provideStoreDevtools(),
    provideEffects(),
  ],
}).catch((err) => console.error(err));
