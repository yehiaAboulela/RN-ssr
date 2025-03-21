import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NanoCeramicProdsComponent } from './nano-ceramic-prods.component';

describe('NanoCeramicProdsComponent', () => {
  let component: NanoCeramicProdsComponent;
  let fixture: ComponentFixture<NanoCeramicProdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NanoCeramicProdsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NanoCeramicProdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
