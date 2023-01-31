import { Component, Input } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'tp-activity',
  template: `
    <mat-card>
      <mat-card-subtitle>
        <a class="title">{{ caption }}</a>
        <fa-icon
          [icon]="infoIcon"
          [matTooltip]="info"
          matTooltipClass="activity-tooltip"
        ></fa-icon>
      </mat-card-subtitle>
      <mat-card-title>{{ value }}</mat-card-title>
    </mat-card>
  `,
})
export class ActivityComponent {
  @Input() value = 0;
  @Input() caption!: string;
  @Input() info!: string;
  infoIcon = faInfoCircle;
}
