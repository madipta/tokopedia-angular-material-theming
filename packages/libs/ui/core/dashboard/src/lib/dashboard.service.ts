import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  private themeSubject = new BehaviorSubject('light');
  theme$ = this.themeSubject.asObservable();

  toggleTheme(theme: string) {
    this.themeSubject.next(theme);
  }
}
