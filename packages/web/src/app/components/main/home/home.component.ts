import { Component } from '@angular/core';
import { ActivitiesComponent } from './activities/activities.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { PerformancesComponent } from './performances/performances.component';
import { StockInfoComponent } from './stock-info/stock-info.component';
import { UpdatesComponent } from './updates/updates.component';
import { UtilitiesComponent } from './utilities/utilities.component';

@Component({
  imports: [
    ActivitiesComponent,
    AnalyticsComponent,
    PerformancesComponent,
    StockInfoComponent,
    UpdatesComponent,
    UtilitiesComponent
  ],
  selector: 'tp-home',
  standalone: true,
  template: `
    <section class="main">
      <tp-activities></tp-activities>
      <tp-updates></tp-updates>
      <tp-analytics></tp-analytics>
      <tp-performances></tp-performances>
      <tp-stock-info></tp-stock-info>
    </section>
    <tp-utilities></tp-utilities>
  `,
})
export class HomeComponent {}
