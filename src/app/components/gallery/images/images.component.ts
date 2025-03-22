import { Component } from '@angular/core';
import { GalleryService } from '../../../shared/services/gallery.service';
import { LanguageService } from '../../../shared/services/language.service';
declare var Fancybox: any;
@Component({
    selector: 'app-images',
    templateUrl: './images.component.html',
    styleUrl: './images.component.css',
    standalone: false
})
export class ImagesComponent {
  constructor(
    private GalleryService: GalleryService,
    private LanguageService: LanguageService
  ) {}
  images: { id: number; imgs: string[] }[] = [];

  lang: string = 'en';

  ngOnInit(): void {
    this.LanguageService.lang.subscribe({
      next: (data) => {
        this.lang = data;
      },
    });
    this.images = this.GalleryService.gallery;
  }

  openImage(id: number): void {
    Fancybox.show(
      this.images
        .filter((cur) => cur.id === id)[0]
        .imgs.map((cur) => ({ src: cur, type: 'image' })),
      {
        dragToClose: true,
        closeButton: false,
        Toolbar: true,
        Thumbs: true,
        infinite: true,
        Carousel: {
          transition: 'fade',
        },
      }
    );
  }
}
