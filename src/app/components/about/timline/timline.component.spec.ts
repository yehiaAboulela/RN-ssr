import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimlineComponent } from './timline.component';

describe('TimlineComponent', () => {
  let component: TimlineComponent;
  let fixture: ComponentFixture<TimlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TimlineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
