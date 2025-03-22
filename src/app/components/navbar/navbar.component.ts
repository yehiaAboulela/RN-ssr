import {
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';
import { LanguageService } from './../../shared/services/language.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  standalone: false,
})
export class NavbarComponent implements OnInit {
  constructor(
    private renderer: Renderer2,
    private LanguageService: LanguageService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}
  lang: string = '';
  nav: boolean = false;
  isNavbarHidden = false;

  ngOnInit() {
    this.LanguageService.lang.subscribe({
      next: (lang) => {
        this.lang = lang;
      },
    });
  }

  changeLang(userLang: string) {
    this.LanguageService.lang.next(userLang);

    localStorage.setItem('lang', this.lang);

    if (isPlatformBrowser(this.platformId)) {
      this.renderer.removeClass(document.body, 'lang-en');
      this.renderer.removeClass(document.body, 'lang-ar');

      this.renderer.addClass(document.body, `lang-${userLang}`);
    }
  }

  closeMinu() {
    if (this.nav) this.nav = false;
  }
}
