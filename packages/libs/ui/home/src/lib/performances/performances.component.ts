import { Component, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {
  faTriangleExclamation,
  faBugSlash,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  imports: [FontAwesomeModule, MatButtonModule, MatCardModule],
  selector: 'ui-performances',
  standalone: true,
  template: `
    <mat-card class="outer-card">
      <mat-card-title>Performa Toko</mat-card-title>
      <mat-card-content>
        <mat-card class="inner-card">
          <mat-card-content>
            <section class="level">Level 1</section>
            <section class="score">
              <h5>Skor performa</h5>
              <p>59/100</p>
            </section>
          </mat-card-content>
        </mat-card>
        <section class="tips">
          <h5>Tips meningkatkan Performa Toko</h5>
          <ul>
            <li>
              <fa-icon class="tips-icon danger" [icon]="dangerIcon"></fa-icon>
              <span>
                Tingkatkan kecepatan membalas chat dan diskusi hingga di bawah
                59 menit
              </span>
            </li>
            <li>
              <fa-icon class="tips-icon" [icon]="warnTipsIcon"></fa-icon>
              <span>Saat ada pesanan, coba sukseskan 94%</span>
            </li>
            <li>
              <fa-icon class="tips-icon" [icon]="warnTipsIcon"></fa-icon>
              <span>Saat ada pesanan, coba kirim dalam 359 menit</span>
            </li>
          </ul>
        </section>
      </mat-card-content>
      <mat-card-actions>
        <a color="primary" mat-button>Lihat selengkapnya</a>
      </mat-card-actions>
    </mat-card>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class PerformancesComponent {
  warnTipsIcon = faTriangleExclamation;
  dangerIcon = faBugSlash;
}
