import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { FlashSaleComponent } from './flash-sale/flash-sale.component';
import { PromoComponent } from './promo/promo.component';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FlashSaleComponent, MatCardModule, MatTabsModule, PromoComponent],
  selector: 'ui-campaign',
  standalone: true,
  template: `
    <mat-card>
      <mat-card-title>Campaign yang bisa kamu ikuti</mat-card-title>
      <mat-card-content>
        <mat-tab-group mat-align-tabs="start">
          <mat-tab label="Flash sale">
            <ui-flash-sale></ui-flash-sale>
          </mat-tab>
          <mat-tab label="Promo Tokopedia">
            <ui-promo></ui-promo>
          </mat-tab>
        </mat-tab-group>
      </mat-card-content>
    </mat-card>
  `,
})
export class CampaignComponent {}
