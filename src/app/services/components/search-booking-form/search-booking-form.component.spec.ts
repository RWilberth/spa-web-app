import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchBookingFormComponent } from './search-booking-form.component';

describe('SearchBookingFormComponent', () => {
  let component: SearchBookingFormComponent;
  let fixture: ComponentFixture<SearchBookingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchBookingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchBookingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
