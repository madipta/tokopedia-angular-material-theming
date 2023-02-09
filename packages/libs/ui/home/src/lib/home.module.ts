import { NgModule } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faBugSlash,
  faBusinessTime,
  faChartArea,
  faCity,
  faClockFour,
  faGifts,
  faInfoCircle,
  faStopwatch,
  faTriangleExclamation,
  faTruck,
  faVault,
} from '@fortawesome/free-solid-svg-icons';

@NgModule({})
export class HomeModule {
  constructor(fl: FaIconLibrary) {
    fl.addIcons(
      faBugSlash,
      faBusinessTime,
      faChartArea,
      faCity,
      faClockFour,
      faGifts,
      faInfoCircle,
      faStopwatch,
      faTriangleExclamation,
      faTruck,
      faVault
    );
  }
}
