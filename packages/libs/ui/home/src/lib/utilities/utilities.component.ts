import { Component, ViewEncapsulation } from '@angular/core';
import { CalendarComponent } from './calendar/calendar.component';
import { CampaignComponent } from './campaign/campaign.component';
import { NewsComponent } from './news/news.component';
import { RecomendationsComponent } from './recomendations/recomendations.component';

@Component({
  imports: [
    CalendarComponent,
    CampaignComponent,
    NewsComponent,
    RecomendationsComponent,
  ],
  selector: 'ui-utilities',
  standalone: true,
  template: `
    <h3 class="title">Keperluan untuk jualanmu</h3>
    <h4 class="subtitle">Cek semuanya untuk tingkatkan performa toko</h4>
    <ui-campaign></ui-campaign>
    <ui-recomendations></ui-recomendations>
    <ui-news></ui-news>
    <ui-calendar></ui-calendar>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class UtilitiesComponent {}
