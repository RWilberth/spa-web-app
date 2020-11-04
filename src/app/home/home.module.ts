import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { NavItemActiveDirective } from './directives/nav-item-active.directive';
import { BannerComponent } from './components/banner/banner.component';
import { ServicesComponent } from './components/services/services.component';
import { ServicesModule } from '../services/services.module';
import { OurTeamComponent } from './components/our-team/our-team.component';
import { FooterComponent } from './components/footer/footer.component';
import { GiftCardsComponent } from './components/gift-cards/gift-cards.component';
import { ServiceDetailComponent } from './components/service-detail/service-detail.component';
import { DefaultNavigationBarComponent } from './components/default-navigation-bar/default-navigation-bar.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    ContactComponent,
    NavigationBarComponent,
    NavItemActiveDirective,
    BannerComponent,
    ServicesComponent,
    OurTeamComponent,
    FooterComponent,
    GiftCardsComponent,
    ServiceDetailComponent,
    DefaultNavigationBarComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ServicesModule
  ]
})
export class HomeModule { }
