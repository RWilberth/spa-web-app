import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultNavigationBarComponent } from './default-navigation-bar.component';

describe('DefaultNavigationBarComponent', () => {
  let component: DefaultNavigationBarComponent;
  let fixture: ComponentFixture<DefaultNavigationBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultNavigationBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultNavigationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
