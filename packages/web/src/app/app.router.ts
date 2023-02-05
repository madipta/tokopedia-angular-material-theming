import { Routes } from '@angular/router';
import { NotImplementedComponent } from './components/main/not-implemented/not-implemented.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/main/home/home.component').then(
        (m) => m.HomeComponent
      ),
  },
  { path: 'not-implemented', component: NotImplementedComponent },
  { path: '**', redirectTo: 'not-implemented', pathMatch: 'full' },
];
