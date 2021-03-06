import { Component, ViewEncapsulation } from '@angular/core';
import {
  faBusinessTime,
  faCity,
  faVault,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'tp-news',
  template: `
    <mat-card>
      <mat-card-content>
        <div class="header">
          <h4 class="title">Bacaan terkini</h4>
          <mat-form-field appearance="legacy">
            <mat-select value="1">
              <mat-option value="1">Artikel</mat-option>
              <mat-option value="2">Info</mat-option>
              <mat-option value="3">Aktifitas</mat-option>
            </mat-select>
          </mat-form-field>
        </div>
        <ul>
          <li>
            <div class="image"><fa-icon [icon]="image1Icon"></fa-icon></div>
            <div class="description">
              <h5 class="title">
                [Khusus Official Store] Hanya 5 Menit! Bikin Kupon TokoMember
                Semudah Itu Lho!
              </h5>
              <p class="intro">Official Store · 21 JUN 22</p>
            </div>
          </li>
          <li>
            <div class="image"><fa-icon [icon]="image2Icon"></fa-icon></div>
            <div class="description">
              <h5 class="title">
                BARU! Bikin Program TokoMember Kini Hanya 3 Langkah
              </h5>
              <p class="intro">Official Store · 21 JUN 22</p>
              <p></p>
            </div>
          </li>
          <li>
            <div class="image"><fa-icon [icon]="image3Icon"></fa-icon></div>
            <div class="description">
              <h5 class="title">
                Secepat Kilat! Begini Cara Ikut Program Loyalitas TokoMember
              </h5>
              <p class="intro">Official Store · 21 JUN 22</p>
              <p></p>
            </div>
          </li>
        </ul>
      </mat-card-content>
    </mat-card>
  `,
  encapsulation: ViewEncapsulation.None
})
export class NewsComponent {
  image1Icon = faBusinessTime;
  image2Icon = faCity;
  image3Icon = faVault;
}
