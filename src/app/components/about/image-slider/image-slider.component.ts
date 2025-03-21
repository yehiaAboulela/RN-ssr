import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LanguageService } from '../../../shared/services/language.service';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css',
})
export class ImageSliderComponent {
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
    mouseDrag: true,
    touchDrag: true,
    dots: false,
    navSpeed: 700,
    nav: false,
    margin: 20,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      767.98: {
        items: 3,
      },
      991.98: {
        items: 4,
      },
      1199.98: {
        items: 5,
      },
    },
  };
  customOptionsAr: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    dots: false,
    navSpeed: 700,
    nav: false,
    margin: 20,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 3000,
    autoplaySpeed: 1000,
    rtl: true,
    responsive: {
      0: {
        items: 1,
      },
      767.98: {
        items: 3,
      },
      991.98: {
        items: 4,
      },
      1199.98: {
        items: 5,
      },
    },
  };
}
