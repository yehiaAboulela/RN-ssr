import {
  afterNextRender,
  Component,
  Inject,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';
import AOS from 'aos';
import { LanguageService } from './shared/services/language.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: false,
})
export class AppComponent {
  title = 'royal-nano';
  constructor(
    private renderer: Renderer2,
    private LanguageService: LanguageService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init({
        duration: 1200,
      });
    }

    // afterNextRender(() => {
    //   const userLang: string = localStorage.getItem('lang') || 'en';
    //   this.LanguageService.lang.next(userLang);
    //   if (localStorage.getItem('lang')) {
    //     if (isPlatformBrowser(this.platformId)) {
    //       this.renderer.removeClass(document.body, 'lang-en');
    //       this.renderer.removeClass(document.body, 'lang-ar');

    //       this.renderer.addClass(
    //         document.body,
    //         `lang-${localStorage.getItem('lang')}`
    //       );
    //     }
    //   }
    // });
  }
}
