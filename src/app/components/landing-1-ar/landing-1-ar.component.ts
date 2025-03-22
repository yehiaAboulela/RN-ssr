import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { LeadsService } from '../../shared/services/leads.service';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
declare var Fancybox: any;

@Component({
  selector: 'app-landing-1-ar',
  templateUrl: './landing-1-ar.component.html',
  styleUrl: './landing-1-ar.component.css',
  standalone: false,
})
export class Landing1ArComponent {
  constructor(
    private fb: FormBuilder,
    private LeadsService: LeadsService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}
  notValid: string = '';
  valid: string = '';
  services: string[] = [
    'Nano Ceramic',
    'Nano Graphene',
    'PPF',
    'Thermal Insolation',
    'Free Consultation',
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay: true,
    autoplaySpeed: 1000,
    center: true,
    margin: 20,
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: false,
  };

  openVideo(src: string): void {
    Fancybox.show(
      [
        {
          src: src,
          type: 'iframe',
          options: {
            iframe: {
              preload: false,
              width: 640,
              height: 360,
            },
          },
        },
      ],
      {
        dragToClose: true,
        closeButton: true,
        Toolbar: true,
        Thumbs: true, // Disable Thumbnails
        infinite: false, // Disable infinite scroll
        animated: true,
      }
    );
  }
  scrollToForm() {
    if (isPlatformBrowser(this.platformId)) {
      document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  leadForm = this.fb.group({
    full_name: ['', Validators.required],
    mobile: ['', Validators.required],
    email: ['', Validators.required],
    client_16849336084508: ['', Validators.required],
    client_16492512972331: ['', Validators.required],
    client_16858930300757: ['', Validators.required],
    client_17293620987926: ['', Validators.required],
  });
  onSubmit(): void {
    if (this.leadForm.valid) {
      this.LeadsService.postLeadForm(this.leadForm.value).subscribe({
        next: (res) => {
          if (!res.status) {
            this.valid = '';
            this.notValid = res.message;
          } else {
            this.notValid = '';
            this.valid = 'Thanks You For Reaching Out';
            this.router.navigate(['/thanks']);
          }
        },
        error: (error) => {
          console.error('Error:', error);
        },
      });
    } else {
      this.notValid = 'Please fill All Fieald';
    }
  }
}
