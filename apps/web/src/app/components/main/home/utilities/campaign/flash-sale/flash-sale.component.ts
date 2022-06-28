import { Component, ViewEncapsulation } from '@angular/core';
import { faGifts, faClockFour } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'tp-flash-sale',
  template: `
    <div class="flash-sale-row">
      <fa-icon [icon]="infoIcon"></fa-icon>
      <div class="flash-sale-detail">
        <h5>Market & Museum vol 10 2 juli 2022</h5>
        <p>pendaftaran ditutup</p>
        <div class="flash-sale-time">
          <span><fa-icon [icon]="timeIcon"></fa-icon><b>4 hari</b></span>
        </div>
      </div>
    </div>
    <div class="flash-sale-row">
      <fa-icon [icon]="infoIcon"></fa-icon>
      <div class="flash-sale-detail">
        <h5>Market & Museum vol 10 3 juli 2022</h5>
        <p>pendaftaran ditutup</p>
        <div class="flash-sale-time">
          <span><fa-icon [icon]="timeIcon"></fa-icon><b>4 hari</b></span>
        </div>
      </div>
    </div>
    <div class="flash-sale-row">
      <fa-icon [icon]="infoIcon"></fa-icon>
      <div class="flash-sale-detail">
        <h5>Market & Museum vol 10 1 juli 2022</h5>
        <p>pendaftaran ditutup</p>
        <div class="flash-sale-time">
          <span><fa-icon [icon]="timeIcon"></fa-icon><b>4 hari</b></span>
        </div>
      </div>
    </div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class FlashSaleComponent {
  infoIcon = faGifts;
  timeIcon = faClockFour;
}
