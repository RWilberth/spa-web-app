import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { ServiceDetailComponent } from './components/service-detail/service-detail.component';
import { DefaultNavigationBarComponent } from './components/default-navigation-bar/default-navigation-bar.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: '', component: NavigationBarComponent, outlet: 'header', pathMatch: 'full'},
  { path: 'service', component: ServiceDetailComponent },
  { path: 'service', component: DefaultNavigationBarComponent, outlet: 'header' },
  { path: 'shopping-cart', component: ShoppingCartComponent },
  { path: '**', component: NavigationBarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
