import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AdvertisementComponent } from './advertisement/advertisement.component';
import { EmptyComponent } from './empty/empty.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [AdvertisementComponent, EmptyComponent],
  selector: 'ui-stock-info',
  standalone: true,
  template: `
    <ui-stock-info-empty></ui-stock-info-empty>
    <ui-stock-info-adv></ui-stock-info-adv>
  `,
})
export class StockInfoComponent {}
