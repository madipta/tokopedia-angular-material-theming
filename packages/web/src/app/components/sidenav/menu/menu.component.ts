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

@Component({
  selector: 'tp-sidenav-menu',
  template: `
    <ul class="top">
      <li>
        <tp-sidenav-menu-item
          caption="Home"
          class="active"
          [icon]="homeIcon"
          link="home"
        ></tp-sidenav-menu-item>
      </li>
      <li>
        <tp-sidenav-menu-item
          caption="Chat"
          [icon]="chatIcon"
          link="chat"
        ></tp-sidenav-menu-item>
      </li>
      <li>
        <tp-sidenav-menu-item
          caption="Diskusi"
          [icon]="discussIcon"
          link="discussion"
        >
        </tp-sidenav-menu-item>
      </li>
      <li>
        <tp-sidenav-menu-item
          caption="Produk"
          [hasChildMenu]="true"
          [icon]="productIcon"
          link="product"
        >
          <tp-sidenav-menu-item
            caption="Tambah Produk"
            link="product"
          ></tp-sidenav-menu-item>
          <tp-sidenav-menu-item
            caption="Daftar Produk"
            link="product"
          ></tp-sidenav-menu-item>
        </tp-sidenav-menu-item>
      </li>
      <li>
        <tp-sidenav-menu-item
          caption="Pesanan"
          [icon]="orderIcon"
          link="order-list"
        ></tp-sidenav-menu-item>
      </li>
    </ul>
    <div class="divider">-</div>
    <ul class="top">
      <li>
        <tp-sidenav-menu-item
          caption="Statistik"
          [hasChildMenu]="true"
          [icon]="statistikIcon"
          link="statistik"
        >
          <tp-sidenav-menu-item
            caption="Wawasan Toko"
            link="statistik"
          ></tp-sidenav-menu-item>
          <tp-sidenav-menu-item
            caption="Wawasan Produk"
            link="statistik"
          ></tp-sidenav-menu-item>
          <tp-sidenav-menu-item
            caption="Wawasan Kunjungan"
            link="statistik"
          ></tp-sidenav-menu-item>
          <tp-sidenav-menu-item
            caption="Wawasan Operasional"
            link="statistik"
          ></tp-sidenav-menu-item>
          <tp-sidenav-menu-item
            caption="Wawasan Pembeli"
            link="statistik"
          ></tp-sidenav-menu-item>
        </tp-sidenav-menu-item>
      </li>
      <li>
        <tp-sidenav-menu-item
          caption="Performa Toko"
          [icon]="performanceIcon"
          link="performance"
        ></tp-sidenav-menu-item>
      </li>
      <li>
        <tp-sidenav-menu-item
          caption="Iklan & Promosi"
          [hasChildMenu]="true"
          [icon]="advertisingIcon"
          link="advertisement"
        >
          <tp-sidenav-menu-item
            caption="Promosi"
            link="advertisement"
          ></tp-sidenav-menu-item>
          <tp-sidenav-menu-item
            caption="Iklan TopAds"
            link="advertisement"
          ></tp-sidenav-menu-item>
        </tp-sidenav-menu-item>
      </li>
      <li>
        <tp-sidenav-menu-item
          caption="Dekorasi Toko"
          [icon]="decorIcon"
          link="decoration"
        ></tp-sidenav-menu-item>
      </li>
      <li>
        <tp-sidenav-menu-item
          caption="Kata Pembeli"
          [hasChildMenu]="true"
          [icon]="buyerReviewsIcon"
          link="reviews"
        >
          <tp-sidenav-menu-item
            caption="Ulasan"
            link="reviews"
          ></tp-sidenav-menu-item>
          <tp-sidenav-menu-item
            caption="Pesanan Dikomplain"
            link="reviews"
          ></tp-sidenav-menu-item>
        </tp-sidenav-menu-item>
      </li>
      <li>
        <tp-sidenav-menu-item
          caption="Layanan Tambahan"
          [hasChildMenu]="true"
          [icon]="moreServiceIcon"
          link="other-service"
        >
          <tp-sidenav-menu-item
            caption="Kemasan Produk"
            link="other-service"
          ></tp-sidenav-menu-item>
          <tp-sidenav-menu-item
            caption="Bayar Tagihan"
            link="other-service"
          ></tp-sidenav-menu-item>
        </tp-sidenav-menu-item>
      </li>
    </ul>
    <div class="divider">-</div>
    <ul class="top">
      <li>
        <tp-sidenav-menu-item
          caption="Pusat Edukasi Seller"
          [icon]="edukasiIcon"
          link="educations"
        ></tp-sidenav-menu-item>
      </li>
      <li>
        <tp-sidenav-menu-item
          caption="Bantuan Tokopedia Care"
          [icon]="helpIcon"
          link="help"
        ></tp-sidenav-menu-item>
      </li>
    </ul>
    <div class="divider">-</div>
    <ul class="top">
      <li>
        <tp-sidenav-menu-item
          caption="Pengaturan"
          [hasChildMenu]="true"
          [icon]="settingsIcon"
          link="settings"
        >
          <tp-sidenav-menu-item
            caption="Pengaturan Toko"
            link="settings"
          ></tp-sidenav-menu-item>
          <tp-sidenav-menu-item
            caption="Pengaturan Admin"
            link="settings"
          ></tp-sidenav-menu-item>
        </tp-sidenav-menu-item>
      </li>
    </ul>
  `,
  encapsulation: ViewEncapsulation.None
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
