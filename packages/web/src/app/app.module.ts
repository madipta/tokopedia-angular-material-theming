import { NgModule } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import {
  faBoxArchive,
  faBullhorn,
  faChartLine,
  faCirclePlus,
  faComments,
  faFileLines,
  faGaugeHigh,
  faGear,
  faGraduationCap,
  faHome,
  faMessage,
  faPalette,
  faPhoneVolume,
  faWheelchair,
} from '@fortawesome/free-solid-svg-icons';

@NgModule({})
export class AppModule {
  constructor(fl: FaIconLibrary) {
    fl.addIcons(
      faBoxArchive,
      faBullhorn,
      faChartLine,
      faCirclePlus,
      faComments,
      faFileLines,
      faGaugeHigh,
      faGear,
      faGraduationCap,
      faHome,
      faMessage,
      faPalette,
      faPhoneVolume,
      faWheelchair
    );
  }
}
