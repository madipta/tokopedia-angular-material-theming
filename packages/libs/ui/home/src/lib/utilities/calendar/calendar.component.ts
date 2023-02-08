import { Component, ViewEncapsulation } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  imports: [
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
  ],
  selector: 'ui-calendar',
  standalone: true,
  template: `
    <mat-card>
      <mat-card-content>
        <div class="header">
          <h4 class="title">Kalender event</h4>
          <mat-form-field>
            <mat-label></mat-label>
            <mat-date-range-input [rangePicker]="picker">
              <input matStartDate placeholder="Start date" [value]="start" />
              <input matEndDate placeholder="End date" [value]="end" />
            </mat-date-range-input>
            <mat-datepicker-toggle
              [for]="picker"
              matSuffix
            ></mat-datepicker-toggle>
            <mat-date-range-picker #picker></mat-date-range-picker>
          </mat-form-field>
        </div>
        <ul class="main">
          <li>
            <div class="date">
              <div class="day">20</div>
              <div class="month">Jun</div>
            </div>
            <div class="description">
              <h5>Men in Style 10-23 June 2022</h5>
              <p>
                Ikut program promo Tokopedia yuk, tingatkan eksposur produkmu!
              </p>
              <span class="category">Campaign</span>
            </div>
          </li>
          <li>
            <div class="date">
              <div class="day">21</div>
              <div class="month">Jun</div>
            </div>
            <div class="description">
              <h5>Webinar: Tips Atur Keuangan Toko Lancar</h5>
              <p>Ingin jago atur keuangan toko? simak tipsnya di webinar</p>
              <span class="category">Webinar</span>
            </div>
          </li>
          <li>
            <div class="date">
              <div class="day">21</div>
              <div class="month">Jun</div>
            </div>
            <div class="description">
              <h5>Webinar: Tips Tingkatkan order a la Mentor KTOP</h5>
              <p>Bingung cara naikin orderan? Simak tips dari Mentor KTOP</p>
              <span class="category">Webinar</span>
            </div>
          </li>
        </ul>
      </mat-card-content>
    </mat-card>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class CalendarComponent {
  end = new Date(2022, 6, 15);
  start = new Date(2022, 6, 1);
}
