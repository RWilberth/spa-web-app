import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { NgbDatepicker, NgbDatepickerI18n } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-booking-date-picker',
  templateUrl: './booking-date-picker.component.html',
  styleUrls: ['./booking-date-picker.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class BookingDatePickerComponent {
  @ViewChild(NgbDatepicker, { static: true }) datepicker: NgbDatepicker;

  constructor(public i18n: NgbDatepickerI18n) {}

  navigate(month: number): void {
    const { state, calendar } = this.datepicker;
    this.datepicker.navigateTo(calendar.getNext(state.firstDate, 'm', month));
  }

  setToday(): void {
    const { calendar } = this.datepicker;
    this.datepicker.navigateTo(calendar.getToday());
  }
}
