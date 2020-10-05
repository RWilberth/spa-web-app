import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaMenuComponent } from './social-media-menu.component';

describe('SocialMediaMenuComponent', () => {
  let component: SocialMediaMenuComponent;
  let fixture: ComponentFixture<SocialMediaMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialMediaMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialMediaMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
