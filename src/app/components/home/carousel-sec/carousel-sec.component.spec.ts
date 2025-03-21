import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselSecComponent } from './carousel-sec.component';

describe('CarouselSecComponent', () => {
  let component: CarouselSecComponent;
  let fixture: ComponentFixture<CarouselSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CarouselSecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
