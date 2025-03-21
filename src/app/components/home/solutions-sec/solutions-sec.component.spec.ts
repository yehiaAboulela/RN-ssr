import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsSecComponent } from './solutions-sec.component';

describe('SolutionsSecComponent', () => {
  let component: SolutionsSecComponent;
  let fixture: ComponentFixture<SolutionsSecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SolutionsSecComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutionsSecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
