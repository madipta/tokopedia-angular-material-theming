import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  imports: [FontAwesomeModule, MatCardModule, MatTooltipModule],
  selector: 'tp-activity',
  standalone: true,
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
