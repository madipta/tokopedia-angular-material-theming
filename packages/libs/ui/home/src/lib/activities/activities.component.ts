import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivityComponent } from './activity/activity.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ActivityComponent],
  selector: 'ui-activities',
  standalone: true,
  template: `
    <h3 class="title">{{ title }}</h3>
    <h4 class="subtitle">{{ subTitle }}</h4>
    <section class="activities">
      <ui-activity
        caption="Pesanan baru"
        info="Jumlah pesanan yang baru masuk dan sudah dibayar pembeli"
        [value]="0"
      ></ui-activity>
      <ui-activity
        caption="Siap dikirim"
        info="Pesanan yang sudah kamu terima dan belum dikirim ke pembeli"
        [value]="0"
      ></ui-activity>
      <ui-activity
        caption="Pesanan dikomplain"
        info="Komplain dari pembeli yang belum kamu tanggapi"
        [value]="0"
      ></ui-activity>
      <ui-activity
        caption="Chat baru"
        info="Jumlah chat dari pembeli yang belum kamu balas"
        [value]="0"
      ></ui-activity>
      <ui-activity
        caption="Diskusi baru"
        info="Jumlah pertanyaan dikolom diskusi yang belum kamu jawab"
        [value]="0"
      ></ui-activity>
      <ui-activity
        caption="Ulasan Baru"
        info="Jumlah ulasan dari pembeli yang belum kamu balas"
        [value]="0"
      ></ui-activity>
    </section>
  `,
})
export class ActivitiesComponent {
  title = 'Penting hari ini';
  subTitle = 'Aktivitas yang perlu kamu pantau untuk jaga kepuasan pembeli';
}
