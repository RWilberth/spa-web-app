import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-time-picker',
  templateUrl: './grid-time-picker.component.html',
  styleUrls: ['./grid-time-picker.component.scss'],
})
export class GridTimePickerComponent implements OnInit {
  private static DEFAULT_COL_SIZE = 3;
  hours: Array<Date>;
  @Input() classHour = { 'col-4': true };
  selectedHour: Date;

  constructor() {
    this.hours = [];
  }

  ngOnInit(): void {
    this.init();
  }

  isSelectedHour(hour: Date): boolean {
    return this.selectedHour === hour;
  }

  init(): void {
    /* $('.cell').click(function () {
      $('.cell').removeClass('select');
      $(this).addClass('select');
    }); */
    const endDate = new Date();
    const initDate = new Date();
    initDate.setHours(8);
    initDate.setMinutes(0);
    endDate.setHours(18);
    endDate.setMinutes(0);
    this.loadTodayTestData(30, initDate, endDate);
  }

  loadTodayTestData(
    minutesByService: number,
    workInit: Date,
    workEnds: Date
  ): void {
    const currentDate = workInit;
    do {
      const dateToShow = new Date(currentDate.getTime());
      currentDate.setMinutes(currentDate.getMinutes() + minutesByService);
      if (currentDate <= workEnds) {
        this.hours.push(dateToShow);
      }
    } while (currentDate <= workEnds);
  }
  selectHour(hour: Date): void {
    this.selectedHour = hour;
  }
}
