import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
  standalone: false,
})
export class AboutComponent {
  constructor(private meta: Meta, private title: Title) {
    this.title.setTitle('من نحن | رويال نانو - حماية السيارات');

    this.meta.addTags([
      {
        name: 'description',
        content:
          'تعرف على رويال نانو، الشركة الرائدة في تقديم حلول حماية السيارات بتقنيات النانو الحديثة.',
      },
      {
        name: 'keywords',
        content: 'رويال نانو, من نحن, حماية السيارات, طلاء نانو سيراميك',
      },
      { name: 'robots', content: 'index, follow' },

      // Open Graph (OG) for better social media previews
      { property: 'og:title', content: 'من نحن | رويال نانو - حماية السيارات' },
      {
        property: 'og:description',
        content:
          'تعرف على رويال نانو، الشركة الرائدة في تقديم حلول حماية السيارات بتقنيات النانو الحديثة.',
      },

      { property: 'og:url', content: 'https://royalnanoceramic.com/about' },

      // Twitter Card for better sharing on Twitter
      { name: 'twitter:title', content: 'من نحن | رويال نانو' },
      {
        name: 'twitter:description',
        content:
          'تعرف على رويال نانو، الشركة الرائدة في تقديم حلول حماية السيارات بتقنيات النانو الحديثة.',
      },
      {
        name: 'twitter:image',
        content: 'https://royalnanoceramic.com/',
      },
    ]);
  }
}
