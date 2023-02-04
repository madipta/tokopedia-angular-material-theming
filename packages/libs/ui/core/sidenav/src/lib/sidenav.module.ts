import { NgModule } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

@NgModule({})
export class SidenavModule {
  constructor(fl: FaIconLibrary) {
    fl.addIcons(faAngleDown);
  }
}
