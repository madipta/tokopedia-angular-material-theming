import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FontAwesomeModule, MatCardModule],
  selector: 'ui-recomendations',
  standalone: true,
  template: `
    <mat-card>
      <mat-card-title>Rekomendasi</mat-card-title>
      <mat-card-content>
        <ul>
          <li>
            <h6 class="title">Ada produkmu yang belum laku terjual, nih</h6>
            <div class="description">
              <p>Buat Flash Sale Toko supaya produkmu laku terjual, yuk!</p>
              <div class="icon">
                <fa-icon icon="stopwatch" class="warn"></fa-icon>
              </div>
            </div>
            <div class="fitur-type">Rekomendasi Fitur</div>
          </li>
          <li>
            <h6 class="title">6 produkmu perlu perbaikan, nih.</h6>
            <div class="description">
              <p>Cek rekomendasi perbaikannya di halaman Wawasan Produk</p>
              <div class="icon"><fa-icon icon="chart-area"></fa-icon></div>
            </div>
            <div class="fitur-type">Rekomendasi Fitur</div>
          </li>
          <li>
            <h6 class="title">Tokomu belum berfitur Bebas Ongkir, lho</h6>
            <div class="description">
              <p>Buat Kupon Toko agar pembeli dapat Gratis Ongkir!</p>
              <div class="icon"><fa-icon icon="truck"></fa-icon></div>
            </div>
            <div class="fitur-type">Rekomendasi Fitur</div>
          </li>
        </ul>
      </mat-card-content>
    </mat-card>
  `,
})
export class RecomendationsComponent {}
