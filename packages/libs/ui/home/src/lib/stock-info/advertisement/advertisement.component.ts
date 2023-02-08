import { Component, ViewEncapsulation } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  imports: [MatCardModule],
  selector: 'ui-stock-info-adv',
  standalone: true,
  template: `
    <mat-card>
      <mat-card-title>Produk terlaris di tempatmu</mat-card-title>
      <mat-card-content>
        <div class="spacer"></div>
        <h5>Belum ada produk yang terjual, nih</h5>
        <p>Yuk, buat produk di tokomu makin laris dengan iklan terbaik!</p>
      </mat-card-content>
      <mat-card-actions>
        <button color="primary" mat-button>Pakai TopAds</button>
      </mat-card-actions>
    </mat-card>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AdvertisementComponent {}
