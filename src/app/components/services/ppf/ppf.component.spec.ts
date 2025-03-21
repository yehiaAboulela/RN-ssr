import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PpfComponent } from './ppf.component';

describe('PpfComponent', () => {
  let component: PpfComponent;
  let fixture: ComponentFixture<PpfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PpfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PpfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
