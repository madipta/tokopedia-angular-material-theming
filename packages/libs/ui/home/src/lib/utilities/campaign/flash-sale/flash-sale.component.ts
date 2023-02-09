import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FontAwesomeModule],
  selector: 'ui-flash-sale',
  standalone: true,
  template: `
    <div class="flash-sale-row">
      <fa-icon icon="gifts"></fa-icon>
      <div class="flash-sale-detail">
        <h5>Market & Museum vol 10 2 juli 2022</h5>
        <p>pendaftaran ditutup</p>
        <div class="flash-sale-time">
          <span><fa-icon icon="clock-four"></fa-icon><b>4 hari</b></span>
        </div>
      </div>
    </div>
    <div class="flash-sale-row">
      <fa-icon icon="gifts"></fa-icon>
      <div class="flash-sale-detail">
        <h5>Market & Museum vol 10 3 juli 2022</h5>
        <p>pendaftaran ditutup</p>
        <div class="flash-sale-time">
          <span><fa-icon icon="clock-four"></fa-icon><b>4 hari</b></span>
        </div>
      </div>
    </div>
    <div class="flash-sale-row">
      <fa-icon icon="gifts"></fa-icon>
      <div class="flash-sale-detail">
        <h5>Market & Museum vol 10 1 juli 2022</h5>
        <p>pendaftaran ditutup</p>
        <div class="flash-sale-time">
          <span><fa-icon icon="clock-four"></fa-icon><b>4 hari</b></span>
        </div>
      </div>
    </div>
  `,
})
export class FlashSaleComponent {}
