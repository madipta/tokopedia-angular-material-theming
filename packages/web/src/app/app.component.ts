import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChatToolbarComponent } from '@/ui/components/chat-toolbar';
import { InfoBarComponent } from '@/ui/components/info-bar';
import { PrimaryBarComponent } from '@/ui/components/primary-bar';
import { DashboardComponent, StickyBarDirective } from '@/ui/core/dashboard';
import { ISideNavMenu, SideNavMenuListComponent } from '@/ui/core/sidenav';

@Component({
  imports: [
    StickyBarDirective,
    ChatToolbarComponent,
    InfoBarComponent,
    PrimaryBarComponent,
    RouterOutlet,
    SideNavMenuListComponent,
    DashboardComponent,
  ],
  selector: 'tp-root',
  standalone: true,
  template: `
    <ui-dashboard>
      <section header>
        <ui-info-bar></ui-info-bar>
        <ui-primary-bar></ui-primary-bar>
      </section>
      <section sidenav>
        <ui-sidenav-menu-list [config]="config" />
      </section>
      <router-outlet></router-outlet>
      <div uiStickyBar="bottom">
        <ui-chat-toolbar></ui-chat-toolbar>
      </div>
    </ui-dashboard>
  `,
})
export class AppComponent {
  config: ISideNavMenu[] = [
    { type: 'Item', caption: 'Home', icon: 'home', link: 'home' },
    { type: 'Item', caption: 'Chat', icon: 'message', link: 'chat' },
    { type: 'Item', caption: 'Diskusi', icon: 'comments', link: 'discussion' },
    {
      type: 'Folder',
      caption: 'Produk',
      icon: 'box-archive',
      children: [
        { type: 'Item', caption: 'Tambah Produk', link: 'product' },
        { type: 'Item', caption: 'Daftar Produk', link: 'product' },
      ],
    },
    {
      type: 'Item',
      caption: 'Pesanan',
      icon: 'file-lines',
      link: 'order-list',
    },
    { type: 'Divider' },
    {
      type: 'Folder',
      caption: 'Statistik',
      icon: 'chart-line',
      children: [
        { type: 'Item', caption: 'Wawasan Toko', link: 'statistik' },
        { type: 'Item', caption: 'Wawasan Produk', link: 'statistik' },
        { type: 'Item', caption: 'Wawasan Kunjungan', link: 'statistik' },
        { type: 'Item', caption: 'Wawasan Operasional', link: 'statistik' },
        { type: 'Item', caption: 'Wawasan Pembeli', link: 'statistik' },
      ],
    },
    {
      type: 'Item',
      caption: 'Performa Toko',
      icon: 'gauge-high',
      link: 'performance',
    },
    {
      type: 'Folder',
      caption: 'Iklan & Promosi',
      icon: 'bullhorn',
      children: [
        { type: 'Item', caption: 'Promosi', link: 'advertisement' },
        { type: 'Item', caption: 'Iklan TopAds', link: 'advertisement' },
      ],
    },
    {
      type: 'Item',
      caption: 'Dekorasi Toko',
      icon: 'palette',
      link: 'decoration',
    },
    {
      type: 'Folder',
      caption: 'Kata Pembeli',
      icon: 'phone-volume',
      children: [
        { type: 'Item', caption: 'Ulasan', link: 'reviews' },
        { type: 'Item', caption: 'Pesanan Dikomplain', link: 'reviews' },
      ],
    },
    {
      type: 'Folder',
      caption: 'Layanan Tambahan',
      icon: 'circle-plus',
      children: [
        { type: 'Item', caption: 'Kemasan Produk', link: 'other-service' },
        { type: 'Item', caption: 'Bayar Tagihan', link: 'other-service' },
      ],
    },
    { type: 'Divider' },
    {
      type: 'Item',
      caption: 'Pusat Edukasi Seller',
      icon: 'graduation-cap',
      link: 'educations',
    },
    {
      type: 'Item',
      caption: 'Bantuan Tokopedia Care',
      icon: 'wheelchair',
      link: 'help',
    },
    { type: 'Divider' },
    {
      type: 'Folder',
      caption: 'Pengaturan',
      icon: 'gear',
      children: [
        { type: 'Item', caption: 'Pengaturan Toko', link: 'settings' },
        { type: 'Item', caption: 'Pengaturan Admin', link: 'settings' },
      ],
    },
  ];
}
