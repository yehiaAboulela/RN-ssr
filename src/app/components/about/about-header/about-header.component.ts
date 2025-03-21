import { Component } from '@angular/core';
import { LanguageService } from '../../../shared/services/language.service';

@Component({
  selector: 'app-about-header',
  templateUrl: './about-header.component.html',
  styleUrl: './about-header.component.css',
})
export class AboutHeaderComponent {
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
