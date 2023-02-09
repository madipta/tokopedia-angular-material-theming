import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  imports: [FontAwesomeModule, MatButtonModule, MatCardModule],
  selector: 'ui-updates',
  standalone: true,
  template: `
    <mat-card>
      <mat-card-content>
        <fa-icon class="info-icon" icon="info-circle"></fa-icon>
        <div class="title">
          <h4>{{ caption }}</h4>
          <p>{{ subtitle }}</p>
        </div>
        <button color="primary" mat-flat-button>Pelajari</button>
      </mat-card-content>
    </mat-card>
  `,
})
export class UpdatesComponent {
  caption = 'Per 6 Juni, ada penyesuaian biaya layanan';
  subtitle =
    'Yuk, pelajari tentang update biaya layanan sesuai kategori produk terjual.';
}
