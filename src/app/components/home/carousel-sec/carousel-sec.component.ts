import { LanguageService } from './../../../shared/services/language.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-carousel-sec',
    templateUrl: './carousel-sec.component.html',
    styleUrl: './carousel-sec.component.css',
    standalone: false
})
export class CarouselSecComponent {
  constructor(private LanguageService: LanguageService) {}
  lang: string = 'en';
  ngOnInit(): void {
    this.LanguageService.lang.subscribe({
      next: (data) => {
        this.lang = data;
      },
    });
  }
}
