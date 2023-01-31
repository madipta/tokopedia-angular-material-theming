import { Component, ViewEncapsulation } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'tp-updates',
  template: `
    <mat-card>
      <mat-card-content>
        <fa-icon class="info-icon" [icon]="infoIcon"></fa-icon>
        <div class="title">
          <h4>{{ caption }}</h4>
          <p>{{ subtitle }}</p>
        </div>
        <button color="primary" mat-flat-button>Pelajari</button>
      </mat-card-content>
    </mat-card>
  `,
  encapsulation: ViewEncapsulation.None
})
export class UpdatesComponent {
  caption = 'Per 6 Juni, ada penyesuaian biaya layanan';
  infoIcon = faInfoCircle;
  subtitle =
    'Yuk, pelajari tentang update biaya layanan sesuai kategori produk terjual.';
}
