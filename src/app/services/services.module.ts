import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceCardComponent } from './components/service-card/service-card.component';
import { SearchBookingFormComponent } from './components/search-booking-form/search-booking-form.component';



@NgModule({
  declarations: [ServiceCardComponent, SearchBookingFormComponent],
  imports: [
    CommonModule
  ],
  exports: [ ServiceCardComponent, SearchBookingFormComponent ]
})
export class ServicesModule { }
