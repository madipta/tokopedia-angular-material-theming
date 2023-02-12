import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, FontAwesomeModule, MatCardModule, MatTooltipModule],
  selector: 'ui-analytic-card',
  standalone: true,
  template: `
    <mat-card class="income" [ngClass]="{ selected }">
      <mat-card-subtitle
        >{{ caption }}
        <fa-icon
          class="info-icon"
          icon="info-circle"
          [matTooltip]="tooltip"
          matTooltipClass="tp-tooltip"
        ></fa-icon
      ></mat-card-subtitle>
      <mat-card-content>
        <div class="description">{{ description }}</div>
        <div class="detail">{{ detail }}</div>
      </mat-card-content>
    </mat-card>
  `,
})
export class AnalyticCardComponent {
  @Input() caption = '';
  @Input() description = '';
  @Input() detail = '';
  @Input() selected = false;
  @Input() tooltip = '';
}
