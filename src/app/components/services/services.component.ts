import { ActivatedRoute } from '@angular/router';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LanguageService } from '../../shared/services/language.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent implements OnInit, AfterViewInit {
  constructor(
    private LanguageService: LanguageService,
    private route: ActivatedRoute
  ) {}

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
