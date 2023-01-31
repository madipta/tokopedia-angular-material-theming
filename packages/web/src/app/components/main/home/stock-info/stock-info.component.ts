import { Component, ViewEncapsulation } from '@angular/core';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { EmptyComponent } from './empty/empty.component';

@Component({
  imports: [AdvertisementComponent, EmptyComponent],
  selector: 'tp-stock-info',
  standalone: true,
  template: `
    <tp-stock-info-empty></tp-stock-info-empty>
    <tp-stock-info-adv></tp-stock-info-adv>
  `,
  encapsulation: ViewEncapsulation.None
})
export class StockInfoComponent {}
