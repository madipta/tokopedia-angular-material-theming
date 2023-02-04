import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideRouterStore } from '@ngrx/router-store';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { ThemesFeature } from '@/ui/app-state';
import { SidenavModule } from '@/ui/core/sidenav';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.router';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      RouterModule.forRoot(appRoutes),
      AppModule,
      SidenavModule
    ),
    provideAnimations(),
    provideStore({ Themes: ThemesFeature.themesReducer }),
    provideRouterStore(),
    provideStoreDevtools(),
    provideEffects(),
  ],
}).catch((err) => console.error(err));
