import { Component } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.css',
    standalone: false
})
export class FooterComponent {
  constructor(private LanguageService: LanguageService) {}
  lang: string = 'en';
  allBranches: boolean = false;
  ngOnInit(): void {
    this.LanguageService.lang.subscribe({
      next: (data) => {
        this.lang = data;
      },
    });
  }
}
