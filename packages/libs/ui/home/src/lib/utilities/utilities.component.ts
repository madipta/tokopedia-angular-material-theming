import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CalendarComponent } from './calendar/calendar.component';
import { CampaignComponent } from './campaign/campaign.component';
import { NewsComponent } from './news/news.component';
import { RecomendationsComponent } from './recomendations/recomendations.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CalendarComponent,
    CampaignComponent,
    NewsComponent,
    RecomendationsComponent,
  ],
  selector: 'ui-utilities',
  standalone: true,
  template: `
    <h3 class="home-title">Keperluan untuk jualanmu</h3>
    <h4 class="home-subtitle">Cek semuanya untuk tingkatkan performa toko</h4>
    <section class="main">
      <ui-campaign></ui-campaign>
      <ui-recomendations></ui-recomendations>
      <ui-news></ui-news>
      <ui-calendar></ui-calendar>
    </section>
  `,
})
export class UtilitiesComponent {}
