import { LanguageService } from './../../../shared/services/language.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-location-sec',
    templateUrl: './location-sec.component.html',
    styleUrl: './location-sec.component.css',
    standalone: false
})
export class LocationSecComponent {
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
