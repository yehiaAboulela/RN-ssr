import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  gallery: { id: number; imgs: string[] }[] = [
    {
      id: 1,
      imgs: [
        './gallery/alpha/1.jpg',
        './gallery/alpha/2.jpg',
        './gallery/alpha/3.jpg',
      ],
    },
    {
      id: 2,
      imgs: [
        './gallery/audi/1.jpg',
        './gallery/audi/2.jpg',
        './gallery/audi/3.jpg',
        './gallery/audi/4.jpg',
        './gallery/audi/5.jpg',
      ],
    },
    {
      id: 3,
      imgs: [
        './gallery/bmw/1.jpg',
        './gallery/bmw/2.jpg',
        './gallery/bmw/3.jpg',
        './gallery/bmw/4.jpg',
      ],
    },
    {
      id: 4,
      imgs: [
        './gallery/hyundai/1.jpg',
        './gallery/hyundai/2.jpg',
        './gallery/hyundai/3.jpg',
      ],
    },
    {
      id: 5,
      imgs: [
        './gallery/mercedes/1.jpg',
        './gallery/mercedes/2.jpg',
        './gallery/mercedes/3.jpg',
        './gallery/mercedes/4.jpg',
        './gallery/mercedes/5.jpg',
        './gallery/mercedes/6.jpg',
        './gallery/mercedes/7.jpg',
      ],
    },
    {
      id: 6,
      imgs: [
        './gallery/peugeot/1.jpg',
        './gallery/peugeot/2.jpg',
        './gallery/peugeot/3.jpg',
        './gallery/peugeot/4.jpg',
        './gallery/peugeot/5.jpg',
        './gallery/peugeot/6.jpg',
        './gallery/peugeot/7.jpg',
        './gallery/peugeot/8.jpg',
        './gallery/peugeot/9.jpg',
        './gallery/peugeot/10.jpg',
      ],
    },
    {
      id: 7,
      imgs: [
        './gallery/pourche/1.jpg',
        './gallery/pourche/2.jpg',
        './gallery/pourche/3.jpg',
        './gallery/pourche/4.jpg',
        './gallery/pourche/5.jpg',
        './gallery/pourche/6.jpg',
      ],
    },
    {
      id: 8,
      imgs: [
        './gallery/rangrover/1.jpg',
        './gallery/rangrover/2.jpg',
        './gallery/rangrover/3.jpg',
        './gallery/rangrover/4.jpg',
        './gallery/rangrover/5.jpg',
        './gallery/rangrover/6.jpg',
        './gallery/rangrover/7.jpg',
        './gallery/rangrover/8.jpg',
        './gallery/rangrover/9.jpg',
      ],
    },
    {
      id: 9,
      imgs: [
        './gallery/skoda/1.jpg',
        './gallery/skoda/2.jpg',
        './gallery/skoda/3.jpg',
      ],
    },
    {
      id: 10,
      imgs: [
        './gallery/tesla/1.jpg',
        './gallery/tesla/2.jpg',
        './gallery/tesla/3.jpg',
      ],
    },
    {
      id: 11,
      imgs: [
        './gallery/volkswagen/1.jpg',
        './gallery/volkswagen/2.jpg',
        './gallery/volkswagen/3.jpg',
        './gallery/volkswagen/4.jpg',
        './gallery/volkswagen/5.jpg',
      ],
    },
    {
      id: 12,
      imgs: [
        './gallery/bmw2/1.jpg',
        './gallery/bmw2/2.jpg',
        './gallery/bmw2/3.jpg',
        './gallery/bmw2/4.jpg',
      ],
    },
    {
      id: 13,
      imgs: ['./gallery/jeep/1.jpg'],
    },
    {
      id: 14,
      imgs: [
        './gallery/mercedes2/1.jpg',
        './gallery/mercedes2/2.jpg',
        './gallery/mercedes2/3.jpg',
        './gallery/mercedes2/4.jpg',
        './gallery/mercedes2/5.jpg',
        './gallery/mercedes2/6.jpg',
        './gallery/mercedes2/7.jpg',
        './gallery/mercedes2/8.jpg',
        './gallery/mercedes2/9.jpg',
      ],
    },
    {
      id: 15,
      imgs: [
        './gallery/mercedes3/1.jpg',
        './gallery/mercedes3/2.jpg',
        './gallery/mercedes3/3.jpg',
        './gallery/mercedes3/4.jpg',
        './gallery/mercedes3/5.jpg',
        './gallery/mercedes3/6.jpg',
        './gallery/mercedes3/7.jpg',
        './gallery/mercedes3/8.jpg',
        './gallery/mercedes3/9.jpg',
      ],
    },
    {
      id: 16,
      imgs: [
        './gallery/mercedes4/1.jpg',
        './gallery/mercedes4/2.jpg',
        './gallery/mercedes4/3.jpg',
        './gallery/mercedes4/4.jpg',
        './gallery/mercedes4/5.jpg',
        './gallery/mercedes4/6.jpg',
        './gallery/mercedes4/7.jpg',
      ],
    },
    {
      id: 17,
      imgs: [
        './gallery/mercedes5/1.jpg',
        './gallery/mercedes5/2.jpg',
        './gallery/mercedes5/3.jpg',
        './gallery/mercedes5/4.jpg',
        './gallery/mercedes5/5.jpg',
        './gallery/mercedes5/6.jpg',
        './gallery/mercedes5/7.jpg',
      ],
    },
    {
      id: 18,
      imgs: [
        './gallery/volkswagen2/1.jpg',
        './gallery/volkswagen2/2.jpg',
        './gallery/volkswagen2/3.jpg',
      ],
    },
    {
      id: 19,
      imgs: [
        './gallery/volkswagen3/1.jpg',
        './gallery/volkswagen3/2.jpg',
        './gallery/volkswagen3/3.jpg',
        './gallery/volkswagen3/4.jpg',
      ],
    },
  ];
}
