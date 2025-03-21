import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordAboutUsComponent } from './word-about-us.component';

describe('WordAboutUsComponent', () => {
  let component: WordAboutUsComponent;
  let fixture: ComponentFixture<WordAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WordAboutUsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WordAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
