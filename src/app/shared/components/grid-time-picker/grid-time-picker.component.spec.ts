import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridTimePickerComponent } from './grid-time-picker.component';

describe('GridTimePickerComponent', () => {
  let component: GridTimePickerComponent;
  let fixture: ComponentFixture<GridTimePickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridTimePickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridTimePickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
