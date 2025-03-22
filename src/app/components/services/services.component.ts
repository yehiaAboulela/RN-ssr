import { ActivatedRoute } from '@angular/router';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
  standalone: false,
})
export class ServicesComponent implements OnInit, AfterViewInit {
  constructor(
    private LanguageService: LanguageService,
    private route: ActivatedRoute,
    private meta: Meta,
    private title: Title
  ) {
    this.title.setTitle('خدماتنا | رويال نانو - حماية السيارات بتقنيات متقدمة');

    this.meta.addTags([
      {
        name: 'description',
        content:
          'اكتشف خدمات رويال نانو لحماية السيارات، بما في ذلك النانو سيراميك، حماية الطلاء، والعزل الحراري.',
      },
      {
        name: 'keywords',
        content:
          'خدمات حماية السيارات, النانو سيراميك, حماية الطلاء, العزل الحراري',
      },
      { name: 'robots', content: 'index, follow' },

      // Open Graph (OG) for better social media previews
      {
        property: 'og:title',
        content: 'خدماتنا | رويال نانو - حماية السيارات',
      },
      {
        property: 'og:description',
        content:
          'اكتشف خدمات رويال نانو لحماية السيارات، بما في ذلك النانو سيراميك، حماية الطلاء، والعزل الحراري.',
      },

      { property: 'og:url', content: 'https://royalnanoceramic.com//services' },

      // Twitter Card for better sharing on Twitter
      { name: 'twitter:title', content: 'خدماتنا | رويال نانو' },
      {
        name: 'twitter:description',
        content:
          'اكتشف خدمات رويال نانو لحماية السيارات، بما في ذلك النانو سيراميك، حماية الطلاء، والعزل الحراري.',
      },
    ]);
  }

  lang: string = 'en';
  ngOnInit(): void {
    this.LanguageService.lang.subscribe({
      next: (data) => {
        this.lang = data;
      },
    });
  }
  ngAfterViewInit(): void {
    this.route.fragment.subscribe({
      next: (res) => {
        if (res) {
          setTimeout(function () {
            document
              .getElementById(res)
              ?.scrollIntoView({ behavior: 'smooth' });
          }, 1000);
        }
      },
    });
  }
}
