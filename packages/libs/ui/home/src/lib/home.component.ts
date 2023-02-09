import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivitiesComponent } from './activities/activities.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { PerformancesComponent } from './performances/performances.component';
import { StockInfoComponent } from './stock-info/stock-info.component';
import { UpdatesComponent } from './updates/updates.component';
import { UtilitiesComponent } from './utilities/utilities.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    ActivitiesComponent,
    AnalyticsComponent,
    PerformancesComponent,
    StockInfoComponent,
    UpdatesComponent,
    UtilitiesComponent
  ],
  selector: 'ui-home',
  standalone: true,
  template: `
    <section class="main">
      <ui-activities></ui-activities>
      <ui-updates></ui-updates>
      <ui-analytics></ui-analytics>
      <ui-performances></ui-performances>
      <ui-stock-info></ui-stock-info>
    </section>
    <ui-utilities></ui-utilities>
  `,
})
export class HomeComponent {}
