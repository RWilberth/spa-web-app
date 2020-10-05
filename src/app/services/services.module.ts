import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { SearchBookingFormComponent } from './components/search-booking-form/search-booking-form.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ServiceCardComponent, SearchBookingFormComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ ServiceCardComponent, SearchBookingFormComponent ]
})
export class ServicesModule { }
