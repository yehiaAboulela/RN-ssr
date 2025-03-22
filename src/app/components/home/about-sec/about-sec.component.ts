import { LanguageService } from './../../../shared/services/language.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-about-sec',
    templateUrl: './about-sec.component.html',
    styleUrl: './about-sec.component.css',
    standalone: false
})
export class AboutSecComponent {
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
