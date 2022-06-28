import { Component } from '@angular/core';

@Component({
  selector: 'tp-promo',
  template: `
    <div class="spacer"></div>
    <h5 class="title">Yah, saat ini belum ada campaign</h5>
    <p>
      Tenang, kami lagi siapin promo menarik buat kamu ikuti. Sembari menunggu,
      cek tips buat tingkatkan promosi tokomu!
    </p>
    <button color="primary" mat-flat-button>Tips Optimalkan Promosi</button>
  `,
})
export class PromoComponent {}
