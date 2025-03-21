import { LanguageService } from './../../../shared/services/language.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solutions-sec',
  templateUrl: './solutions-sec.component.html',
  styleUrl: './solutions-sec.component.css',
})
export class SolutionsSecComponent {
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
