import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

export interface IFlashSale {
  title: string;
  info: string;
  time: string;
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, FontAwesomeModule],
  selector: 'ui-flash-sale',
  standalone: true,
  template: `
    <div class="row" *ngFor="let item of flashSales">
      <fa-icon icon="gifts"></fa-icon>
      <div class="detail">
        <h5>Market & Museum vol 10 2 juli 2022</h5>
        <p>pendaftaran ditutup</p>
        <div class="time">
          <span><fa-icon icon="clock-four"></fa-icon><b>4 hari</b></span>
        </div>
      </div>
    </div>
  `,
})
export class FlashSaleComponent {
  @Input() flashSales: IFlashSale[] = [
    {
      title: 'Market & Museum vol 10 2 juli 2022',
      info: 'pendaftaran ditutup',
      time: '4 hari',
    },
    {
      title: 'Market & Museum vol 10 3 juli 2022',
      info: 'pendaftaran ditutup',
      time: '4 hari',
    },
    {
      title: 'Market & Museum vol 10 1 juli 2022',
      info: 'pendaftaran ditutup',
      time: '4 hari',
    },
  ];
}
