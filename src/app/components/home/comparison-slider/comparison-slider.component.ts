import { Component } from '@angular/core';
import { LanguageService } from '../../../shared/services/language.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-comparison-slider',
    templateUrl: './comparison-slider.component.html',
    styleUrl: './comparison-slider.component.css',
    standalone: false
})
export class ComparisonSliderComponent {
  constructor(private LanguageService: LanguageService) {}
  lang: string = 'en';
  ngOnInit(): void {
    this.LanguageService.lang.subscribe({
      next: (data) => {
        this.lang = data;
      },
    });
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    dots: false,
    navSpeed: 700,
    nav: true,
    navText: [
      '<i class="fa-solid fa-chevron-left"></i>',
      '<i class="fa-solid fa-chevron-right"></i>',
    ],

    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  };
}
