import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tp-campaign',
  template: `
    <mat-card>
      <mat-card-title>Campaign yang bisa kamu ikuti</mat-card-title>
      <mat-card-content>
        <mat-tab-group mat-align-tabs="start">
          <mat-tab label="Flash sale">
            <tp-flash-sale></tp-flash-sale>
          </mat-tab>
          <mat-tab label="Promo Tokopedia">
            <tp-promo></tp-promo>
          </mat-tab>
        </mat-tab-group>
      </mat-card-content>
    </mat-card>
  `,
  encapsulation: ViewEncapsulation.None
})
export class CampaignComponent {}
