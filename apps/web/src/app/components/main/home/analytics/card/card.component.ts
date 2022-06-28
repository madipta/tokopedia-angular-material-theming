import { Component, Input, ViewEncapsulation } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'tp-analytic-card',
  template: `
    <mat-card class="income" [ngClass]="{ selected }">
      <mat-card-subtitle
        >{{caption}}
        <fa-icon
          class="info-icon"
          [icon]="infoIcon"
          [matTooltip]="tooltip"
          matTooltipClass="tp-tooltip"
        ></fa-icon
      ></mat-card-subtitle>
      <mat-card-title>{{description}}</mat-card-title>
      <mat-card-content>{{detail}}</mat-card-content>
    </mat-card>
  `,
  encapsulation: ViewEncapsulation.None
})
export class AnalyticCardComponent {
  infoIcon = faInfoCircle;
  @Input() caption = '';
  @Input() description = '';
  @Input() detail = '';
  @Input() selected = false;
  @Input() tooltip = '';
}
