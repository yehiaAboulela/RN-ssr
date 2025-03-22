import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: false,
})
export class HomeComponent {
  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('أفضل منتجات حماية السيارات | رويال نانو');
    this.meta.addTags([
      {
        name: 'description',
        content:
          'اكتشف منتجات وخدمات حماية السيارات عالية الجودة من رويال نانو.',
      },
      {
        name: 'keywords',
        content: 'حماية السيارات, النانو سيراميك, حماية الطلاء',
      },
      { name: 'robots', content: 'index, follow' },
      {
        property: 'og:title',
        content: 'أفضل منتجات حماية السيارات | رويال نانو',
      },
      {
        property: 'og:description',
        content:
          'اكتشف منتجات وخدمات حماية السيارات عالية الجودة من رويال نانو.',
      },

      { property: 'og:url', content: 'https://royalnanoceramic.com/' },
    ]);
  }
}
