import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
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
    importProvidersFrom(AppModule, SidenavModule),
    provideAnimations(),
    provideRouter(appRoutes),
    provideStore({ Themes: ThemesFeature.themesReducer }),
    provideEffects(),
  ],
}).catch((err) => console.error(err));
