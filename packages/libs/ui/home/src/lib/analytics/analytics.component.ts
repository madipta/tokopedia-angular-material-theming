import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgZone,
  ViewChild,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import Chart from 'chart.js/auto';
import { AnalyticCardComponent } from './card/card.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AnalyticCardComponent, MatCardModule],
  selector: 'ui-analytics',
  standalone: true,
  template: `
    <h3 class="home-title">{{ title }}</h3>
    <h4 class="home-subtitle">
      Update terakhir: <b>{{ subTitle }}</b>
    </h4>
    <mat-card class="outer-card">
      <mat-card-title>Statistik tokomu</mat-card-title>
      <mat-card-content>
        <section class="product">
          <ui-analytic-card
            caption="Pendapatan bersih baru"
            description="Rp0"
            detail="0% dari 7 hari terakhir"
            [selected]="true"
            tooltip="Didapat dari pendapatan yang baru masuk, diluar ongkos kirim"
          ></ui-analytic-card>
          <ui-analytic-card
            caption="Produk dilihat"
            description="16"
            detail="+100% dari 7 hari terakhir"
            tooltip="Jumlah kunjungan ke halaman produkmu"
          ></ui-analytic-card>
          <ui-analytic-card
            caption="Produk terjual"
            description="0"
            detail="0% dari 7 hari terakhir"
            tooltip="Jumlah produk terjual dari pesanan yang baru masuk ditokomu"
          ></ui-analytic-card>
        </section>
        <section class="stats-chart">
          <canvas #canvas></canvas>
        </section>
      </mat-card-content>
    </mat-card>
  `,
})
export class AnalyticsComponent implements AfterViewInit {
  @ViewChild('canvas', { static: false }) canvas!: ElementRef;
  chart?: Chart;
  title = 'Analisis toko dan produkmu';
  subTitle = '15 Juni 2022 11:00 WIB';

  constructor(private zone: NgZone) {}

  ngAfterViewInit(): void {
    this.zone.runOutsideAngular(() => {
      this.chart = new Chart(this.canvas.nativeElement, {
        type: 'line',
        data: {
          labels: [
            '28 Jun',
            '29 Jun',
            '30 Jun',
            '1 Jul',
            '2 Jul',
            '3 Jul',
            '4 Jul',
          ],
          datasets: [
            {
              data: [3, 5, 2, 7, 1, 1, 3],
              borderColor: '#4caf50',
              fill: false,
              borderWidth: 3,
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            x: {
              grid: {
                display: false,
              },
            },
            y: {
              grid: {
                display: false,
              },
              ticks: {
                stepSize: 1,
              },
            },
          },
        },
      });
    });
  }
}
