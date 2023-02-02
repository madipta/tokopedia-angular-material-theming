import { Component, ViewEncapsulation } from '@angular/core';
import {
  faBoxArchive,
  faBullhorn,
  faChartLine,
  faCirclePlus,
  faComments,
  faFileLines,
  faGaugeHigh,
  faGear,
  faGraduationCap,
  faHome,
  faMessage,
  faPalette,
  faPhoneVolume,
  faWheelchair,
} from '@fortawesome/free-solid-svg-icons';
import { SideNavMenuItemComponent } from '@/ui/core/sidenav';

@Component({
  imports: [SideNavMenuItemComponent],
  selector: 'tp-sidenav-menu',
  standalone: true,
  template: `
    <ul class="top">
      <li>
        <ui-sidenav-menu-item
          caption="Home"
          class="active"
          [icon]="homeIcon"
          link="home"
        ></ui-sidenav-menu-item>
      </li>
      <li>
        <ui-sidenav-menu-item
          caption="Chat"
          [icon]="chatIcon"
          link="chat"
        ></ui-sidenav-menu-item>
      </li>
      <li>
        <ui-sidenav-menu-item
          caption="Diskusi"
          [icon]="discussIcon"
          link="discussion"
        >
        </ui-sidenav-menu-item>
      </li>
      <li>
        <ui-sidenav-menu-item
          caption="Produk"
          [hasChildMenu]="true"
          [icon]="productIcon"
          link="product"
        >
          <ui-sidenav-menu-item
            caption="Tambah Produk"
            link="product"
          ></ui-sidenav-menu-item>
          <ui-sidenav-menu-item
            caption="Daftar Produk"
            link="product"
          ></ui-sidenav-menu-item>
        </ui-sidenav-menu-item>
      </li>
      <li>
        <ui-sidenav-menu-item
          caption="Pesanan"
          [icon]="orderIcon"
          link="order-list"
        ></ui-sidenav-menu-item>
      </li>
    </ul>
    <div class="divider">-</div>
    <ul class="top">
      <li>
        <ui-sidenav-menu-item
          caption="Statistik"
          [hasChildMenu]="true"
          [icon]="statistikIcon"
          link="statistik"
        >
          <ui-sidenav-menu-item
            caption="Wawasan Toko"
            link="statistik"
          ></ui-sidenav-menu-item>
          <ui-sidenav-menu-item
            caption="Wawasan Produk"
            link="statistik"
          ></ui-sidenav-menu-item>
          <ui-sidenav-menu-item
            caption="Wawasan Kunjungan"
            link="statistik"
          ></ui-sidenav-menu-item>
          <ui-sidenav-menu-item
            caption="Wawasan Operasional"
            link="statistik"
          ></ui-sidenav-menu-item>
          <ui-sidenav-menu-item
            caption="Wawasan Pembeli"
            link="statistik"
          ></ui-sidenav-menu-item>
        </ui-sidenav-menu-item>
      </li>
      <li>
        <ui-sidenav-menu-item
          caption="Performa Toko"
          [icon]="performanceIcon"
          link="performance"
        ></ui-sidenav-menu-item>
      </li>
      <li>
        <ui-sidenav-menu-item
          caption="Iklan & Promosi"
          [hasChildMenu]="true"
          [icon]="advertisingIcon"
          link="advertisement"
        >
          <ui-sidenav-menu-item
            caption="Promosi"
            link="advertisement"
          ></ui-sidenav-menu-item>
          <ui-sidenav-menu-item
            caption="Iklan TopAds"
            link="advertisement"
          ></ui-sidenav-menu-item>
        </ui-sidenav-menu-item>
      </li>
      <li>
        <ui-sidenav-menu-item
          caption="Dekorasi Toko"
          [icon]="decorIcon"
          link="decoration"
        ></ui-sidenav-menu-item>
      </li>
      <li>
        <ui-sidenav-menu-item
          caption="Kata Pembeli"
          [hasChildMenu]="true"
          [icon]="buyerReviewsIcon"
          link="reviews"
        >
          <ui-sidenav-menu-item
            caption="Ulasan"
            link="reviews"
          ></ui-sidenav-menu-item>
          <ui-sidenav-menu-item
            caption="Pesanan Dikomplain"
            link="reviews"
          ></ui-sidenav-menu-item>
        </ui-sidenav-menu-item>
      </li>
      <li>
        <ui-sidenav-menu-item
          caption="Layanan Tambahan"
          [hasChildMenu]="true"
          [icon]="moreServiceIcon"
          link="other-service"
        >
          <ui-sidenav-menu-item
            caption="Kemasan Produk"
            link="other-service"
          ></ui-sidenav-menu-item>
          <ui-sidenav-menu-item
            caption="Bayar Tagihan"
            link="other-service"
          ></ui-sidenav-menu-item>
        </ui-sidenav-menu-item>
      </li>
    </ul>
    <div class="divider">-</div>
    <ul class="top">
      <li>
        <ui-sidenav-menu-item
          caption="Pusat Edukasi Seller"
          [icon]="edukasiIcon"
          link="educations"
        ></ui-sidenav-menu-item>
      </li>
      <li>
        <ui-sidenav-menu-item
          caption="Bantuan Tokopedia Care"
          [icon]="helpIcon"
          link="help"
        ></ui-sidenav-menu-item>
      </li>
    </ul>
    <div class="divider">-</div>
    <ul class="top">
      <li>
        <ui-sidenav-menu-item
          caption="Pengaturan"
          [hasChildMenu]="true"
          [icon]="settingsIcon"
          link="settings"
        >
          <ui-sidenav-menu-item
            caption="Pengaturan Toko"
            link="settings"
          ></ui-sidenav-menu-item>
          <ui-sidenav-menu-item
            caption="Pengaturan Admin"
            link="settings"
          ></ui-sidenav-menu-item>
        </ui-sidenav-menu-item>
      </li>
    </ul>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class SideNavMenuComponent {
  advertisingIcon = faBullhorn;
  buyerReviewsIcon = faPhoneVolume;
  chatIcon = faMessage;
  decorIcon = faPalette;
  discussIcon = faComments;
  edukasiIcon = faGraduationCap;
  helpIcon = faWheelchair;
  homeIcon = faHome;
  moreServiceIcon = faCirclePlus;
  orderIcon = faFileLines;
  performanceIcon = faGaugeHigh;
  productIcon = faBoxArchive;
  settingsIcon = faGear;
  statistikIcon = faChartLine;
}
