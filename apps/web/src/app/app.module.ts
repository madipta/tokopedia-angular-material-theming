import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { UiAppStateModule } from '@root/ui/app-state';
import { environment } from '../environments/environment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { appRoutes } from './app.router';
import { HeaderComponent } from './components/header/header.component';
import { InfoBarComponent } from './components/header/info-bar/info-bar.component';
import { MenuPanelComponent } from './components/header/primary-bar/menu-panel/menu-panel.component';
import { PrimaryBarComponent } from './components/header/primary-bar/primary-bar.component';
import { SearchPanelComponent } from './components/header/primary-bar/search-panel/search-panel.component';
import { ActivitiesComponent } from './components/main/home/activities/activities.component';
import { ActivityComponent } from './components/main/home/activities/activity/activity.component';
import { AnalyticsComponent } from './components/main/home/analytics/analytics.component';
import { AnalyticCardComponent } from './components/main/home/analytics/card/card.component';
import { HomeComponent } from './components/main/home/home.component';
import { PerformancesComponent } from './components/main/home/performances/performances.component';
import { AdvertisementComponent } from './components/main/home/stock-info/advertisement/advertisement.component';
import { EmptyComponent } from './components/main/home/stock-info/empty/empty.component';
import { StockInfoComponent } from './components/main/home/stock-info/stock-info.component';
import { UpdatesComponent } from './components/main/home/updates/updates.component';
import { CalendarComponent } from './components/main/home/utilities/calendar/calendar.component';
import { CampaignComponent } from './components/main/home/utilities/campaign/campaign.component';
import { FlashSaleComponent } from './components/main/home/utilities/campaign/flash-sale/flash-sale.component';
import { PromoComponent } from './components/main/home/utilities/campaign/promo/promo.component';
import { NewsComponent } from './components/main/home/utilities/news/news.component';
import { RecomendationsComponent } from './components/main/home/utilities/recomendations/recomendations.component';
import { UtilitiesComponent } from './components/main/home/utilities/utilities.component';
import { NotImplementedComponent } from './components/main/not-implemented/not-implemented.component';
import { SideNavMenuItemComponent } from './components/sidenav/menu/menu-item/menu-item.component';
import { SideNavMenuComponent } from './components/sidenav/menu/menu.component';
import { SaldoComponent } from './components/sidenav/saldo/saldo.component';
import { ShopInfoComponent } from './components/sidenav/shop-info/shop-info.component';
import { SideNavComponent } from './components/sidenav/sidenav.component';
import { SharedMaterialModule } from './shared/shared-material.module';

@NgModule({
  declarations: [
    AppComponent,
    ActivitiesComponent,
    ActivityComponent,
    AdvertisementComponent,
    AnalyticCardComponent,
    AnalyticsComponent,
    CalendarComponent,
    CampaignComponent,
    EmptyComponent,
    FlashSaleComponent,
    HeaderComponent,
    HomeComponent,
    InfoBarComponent,
    MenuPanelComponent,
    NewsComponent,
    NotImplementedComponent,
    PerformancesComponent,
    PrimaryBarComponent,
    PromoComponent,
    RecomendationsComponent,
    SaldoComponent,
    SearchPanelComponent,
    ShopInfoComponent,
    SideNavComponent,
    SideNavMenuComponent,
    SideNavMenuItemComponent,
    StockInfoComponent,
    UpdatesComponent,
    UtilitiesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes),
    SharedMaterialModule,
    StoreModule.forRoot(
      {},
      {
        metaReducers: !environment.production ? [] : [],
        runtimeChecks: {
          strictActionImmutability: true,
          strictStateImmutability: true,
        },
      }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule.forRoot(),
    UiAppStateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
