import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NanoGrapheneProdsComponent } from './nano-graphene-prods.component';

describe('NanoGrapheneProdsComponent', () => {
  let component: NanoGrapheneProdsComponent;
  let fixture: ComponentFixture<NanoGrapheneProdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NanoGrapheneProdsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NanoGrapheneProdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
