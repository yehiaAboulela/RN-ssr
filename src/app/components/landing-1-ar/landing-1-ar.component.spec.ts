import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Landing1ArComponent } from './landing-1-ar.component';

describe('Landing1ArComponent', () => {
  let component: Landing1ArComponent;
  let fixture: ComponentFixture<Landing1ArComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Landing1ArComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Landing1ArComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
