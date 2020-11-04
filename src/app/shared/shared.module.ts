import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GridTimePickerComponent } from './components/grid-time-picker/grid-time-picker.component';
import { SocialMediaMenuComponent } from './components/social-media-menu/social-media-menu.component';
import { RouterModule } from '@angular/router';
import { BreadcrumbNavComponent } from './components/breadcrumb-nav/breadcrumb-nav.component';
import { CardSelectorComponent } from './components/card-selector/card-selector.component';
import { BookingDatePickerComponent } from './components/booking-date-picker/booking-date-picker.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    GridTimePickerComponent,
    SocialMediaMenuComponent,
    BreadcrumbNavComponent,
    CardSelectorComponent,
    BookingDatePickerComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbDatepickerModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    GridTimePickerComponent,
    SocialMediaMenuComponent,
    BreadcrumbNavComponent,
    CardSelectorComponent,
    BookingDatePickerComponent,
  ],
})
export class SharedModule {}
