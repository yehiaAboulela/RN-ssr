import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationSecComponent } from './location-sec.component';

describe('LocationSecComponent', () => {
  let component: LocationSecComponent;
  let fixture: ComponentFixture<LocationSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LocationSecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
