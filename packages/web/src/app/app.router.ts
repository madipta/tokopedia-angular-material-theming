import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    loadComponent: () => import('@/ui/home').then((m) => m.HomeComponent),
  },
  {
    path: 'not-implemented',
    loadComponent: () =>
      import('./components/not-implemented/not-implemented.component').then(
        (m) => m.NotImplementedComponent
      ),
  },
  { path: '**', redirectTo: 'not-implemented', pathMatch: 'full' },
];
