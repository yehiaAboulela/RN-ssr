import { LanguageService } from './../../../shared/services/language.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css'],
    encapsulation: ViewEncapsulation.None,
    standalone: false
})
export class HeaderComponent implements OnInit {
  lang: string = 'en';
  headerContent1: any[] = [];
  headerContent2: any[] = [];

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageService.lang.subscribe({
      next: (data) => {
        this.lang = data;
        this.updateHeaderContent();
      },
    });
  }

  updateHeaderContent() {
    if (this.lang === 'ar') {
      this.headerContent1 = [
        { text: 'الفروع', numbers: 15, color: '#fae52c' },
        { text: 'العملاء', numbers: 66468, color: '#ff9a9a' },
        { text: 'المنتجات', numbers: 25, color: '#ff3a9a' },
        { text: 'الموظفون', numbers: +250, color: '#54daf9' },
        { text: 'العروض الخاصة', numbers: 5, color: '#fae52c' },
        { text: 'العملاء', numbers: 66468, color: '#ff9a9a' },
        { text: 'المنتجات', numbers: 25, color: '#ff3a9a' },
        { text: 'الموظفون', numbers: +250, color: '#54daf9' },
      ];

      this.headerContent2 = [
        { text: 'العملاء', numbers: 66468, color: '#ff9a9a' },
        { text: 'المنتجات', numbers: 25, color: '#ff3a9a' },
        { text: 'الموظفون', numbers: +250, color: '#54daf9' },
        { text: 'الفروع', numbers: 15, color: '#fae52c' },
        { text: 'العملاء', numbers: 66468, color: '#ff9a9a' },
        { text: 'العروض الخاصة', numbers: 5, color: '#fae52c' },
        { text: 'الموظفون', numbers: +250, color: '#54daf9' },
        { text: 'المنتجات', numbers: 25, color: '#ff3a9a' },
      ];
    } else {
      this.headerContent1 = [
        { text: 'Branches', numbers: 15, color: '#fae52c' },
        { text: 'Clients', numbers: 66468, color: '#ff9a9a' },
        { text: 'Products', numbers: 25, color: '#ff3a9a' },
        { text: 'Employees', numbers: +250, color: '#54daf9' },
        { text: 'Special Offers', numbers: 5, color: '#fae52c' },
        { text: 'Clients', numbers: 66468, color: '#ff9a9a' },
        { text: 'Products', numbers: 25, color: '#ff3a9a' },
        { text: 'Employees', numbers: +250, color: '#54daf9' },
      ];

      this.headerContent2 = [
        { text: 'Clients', numbers: 66468, color: '#ff9a9a' },
        { text: 'Products', numbers: 25, color: '#ff3a9a' },
        { text: 'Employees', numbers: +250, color: '#54daf9' },
        { text: 'Branches', numbers: 15, color: '#fae52c' },
        { text: 'Clients', numbers: 66468, color: '#ff9a9a' },
        { text: 'Special Offers', numbers: 5, color: '#fae52c' },
        { text: 'Employees', numbers: +250, color: '#54daf9' },
        { text: 'Products', numbers: 25, color: '#ff3a9a' },
      ];
    }
  }
}
