import { Component } from '@angular/core';
import { LanguageService } from '../../../shared/services/language.service';

@Component({
  selector: 'app-home-outro-sec',
  templateUrl: './home-outro-sec.component.html',
  styleUrl: './home-outro-sec.component.css',
})
export class HomeOutroSecComponent {
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
