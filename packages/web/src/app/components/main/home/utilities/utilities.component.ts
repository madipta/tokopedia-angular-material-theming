import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tp-utilities',
  template: `
    <h3 class="title">Keperluan untuk jualanmu</h3>
    <h4 class="subtitle">Cek semuanya untuk tingkatkan performa toko</h4>
    <tp-campaign></tp-campaign>
    <tp-recomendations></tp-recomendations>
    <tp-news></tp-news>
    <tp-calendar></tp-calendar>
  `,
  encapsulation: ViewEncapsulation.None
})
export class UtilitiesComponent {}
