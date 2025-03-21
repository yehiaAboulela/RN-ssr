import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThermalInsulationComponent } from './thermal-insulation.component';

describe('ThermalInsulationComponent', () => {
  let component: ThermalInsulationComponent;
  let fixture: ComponentFixture<ThermalInsulationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThermalInsulationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThermalInsulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
