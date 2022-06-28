import { Component, ViewEncapsulation } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'tp-analytics',
  template: `
    <h3 class="title">{{ title }}</h3>
    <h4 class="subtitle">
      Update terakhir: <b>{{ subTitle }}</b>
    </h4>
    <mat-card class="outer-card">
      <mat-card-title>Statistik tokomu</mat-card-title>
      <mat-card-content>
        <section class="product">
          <tp-analytic-card
            caption="Pendapatan bersih baru"
            description="Rp0"
            detail="0% dari 7 hari terakhir"
            [selected]="true"
            tooltip="Didapat dari pendapatan yang baru masuk, diluar ongkos kirim"
          ></tp-analytic-card>
          <tp-analytic-card
            caption="Produk dilihat"
            description="16"
            detail="+100% dari 7 hari terakhir"
            tooltip="Jumlah kunjungan ke halaman produkmu"
          ></tp-analytic-card>
          <tp-analytic-card
            caption="Produk terjual"
            description="0"
            detail="0% dari 7 hari terakhir"
            tooltip="Jumlah produk terjual dari pesanan yang baru masuk ditokomu"
          ></tp-analytic-card>
        </section>
      </mat-card-content>
    </mat-card>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AnalyticsComponent {
  infoIcon = faInfoCircle;
  title = 'Analisis toko dan produkmu';
  subTitle = '15 Juni 2022 11:00 WIB';
}
