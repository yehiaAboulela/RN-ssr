import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOutroSecComponent } from './home-outro-sec.component';

describe('HomeOutroSecComponent', () => {
  let component: HomeOutroSecComponent;
  let fixture: ComponentFixture<HomeOutroSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeOutroSecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeOutroSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
