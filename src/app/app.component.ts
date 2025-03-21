import { Component, Renderer2 } from '@angular/core';
import AOS from 'aos';
import { LanguageService } from './shared/services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'royal-nano';
  constructor(
    private renderer: Renderer2,
    private LanguageService: LanguageService
  ) {}

  ngOnInit(): void {
    const userLang: string = localStorage.getItem('lang') || 'en';
    this.LanguageService.lang.next(userLang);
    if (localStorage.getItem('lang')) {
      this.renderer.removeClass(document.body, 'lang-en');
      this.renderer.removeClass(document.body, 'lang-ar');

      this.renderer.addClass(
        document.body,
        `lang-${localStorage.getItem('lang')}`
      );
    }
    AOS.init({
      duration: 1200,
    });
  }
}
