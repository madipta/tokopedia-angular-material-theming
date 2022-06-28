import { Routes } from '@angular/router';
import { HomeComponent } from './components/main/home/home.component';
import { NotImplementedComponent } from './components/main/not-implemented/not-implemented.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'not-implemented', component: NotImplementedComponent },
  { path: '**', redirectTo: 'not-implemented', pathMatch: 'full' },
];
