import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SideNavService {
  private minimizeSubject = new BehaviorSubject(false);
  minimize$ = this.minimizeSubject.asObservable();

  toggleSideNav() {
    this.minimizeSubject.next(!this.minimizeSubject.value);
  }
}
