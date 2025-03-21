import { LanguageService } from './../../../shared/services/language.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  constructor(private LanguageService: LanguageService) {}
  src: string = 'https://tools.royalshieldworld.com/public/imgs/HYPERD+.png';
  lang: string = 'en';
  ngOnInit(): void {
    this.LanguageService.lang.subscribe({
      next: (data) => {
        this.lang = data;
      },
    });
  }
}
