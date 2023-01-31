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
  selector: 'tp-utilities',
  standalone: true,
  template: `
    <h3 class="title">Keperluan untuk jualanmu</h3>
    <h4 class="subtitle">Cek semuanya untuk tingkatkan performa toko</h4>
    <tp-campaign></tp-campaign>
    <tp-recomendations></tp-recomendations>
    <tp-news></tp-news>
    <tp-calendar></tp-calendar>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class UtilitiesComponent {}
