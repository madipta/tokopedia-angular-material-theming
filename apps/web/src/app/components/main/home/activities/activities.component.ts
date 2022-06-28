import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tp-activities',
  template: `
    <h3 class="title">{{ title }}</h3>
    <h4 class="subtitle">{{ subTitle }}</h4>
    <section class="activities">
      <tp-activity
        caption="Pesanan baru"
        info="Jumlah pesanan yang baru masuk dan sudah dibayar pembeli"
        [value]="0"
      ></tp-activity>
      <tp-activity
        caption="Siap dikirim"
        info="Pesanan yang sudah kamu terima dan belum dikirim ke pembeli"
        [value]="0"
      ></tp-activity>
      <tp-activity
        caption="Pesanan dikomplain"
        info="Komplain dari pembeli yang belum kamu tanggapi"
        [value]="0"
      ></tp-activity>
      <tp-activity
        caption="Chat baru"
        info="Jumlah chat dari pembeli yang belum kamu balas"
        [value]="0"
      ></tp-activity>
      <tp-activity
        caption="Diskusi baru"
        info="Jumlah pertanyaan dikolom diskusi yang belum kamu jawab"
        [value]="0"
      ></tp-activity>
      <tp-activity
        caption="Ulasan Baru"
        info="Jumlah ulasan dari pembeli yang belum kamu balas"
        [value]="0"
      ></tp-activity>
    </section>
  `,
  encapsulation: ViewEncapsulation.None
})
export class ActivitiesComponent {
  title = 'Penting hari ini';
  subTitle = 'Aktivitas yang perlu kamu pantau untuk jaga kepuasan pembeli';
}
