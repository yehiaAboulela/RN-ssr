import { LanguageService } from './../../shared/services/language.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  constructor(private LanguageService: LanguageService) {}
  lang: string = 'en';

  ngOnInit(): void {
    this.LanguageService.lang.subscribe({
      next: (data) => {
        this.lang = data;
      },
    });
  }
  locations: any = {
    tanta:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d109672.62752137944!2d30.849149149498917!3d30.79507270000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f7cbd78ec9ec8f%3A0x40da8ba71a77b0e5!2sRoyal%20Nano%20ceramic!5e0!3m2!1sen!2seg!4v1727532189684!5m2!1sen!2seg',
    october:
      'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d110616.52923514498!2d30.762201897265626!3d29.957393200000013!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145857a2f9920b5b%3A0x3cc48556389a36b5!2sRoyal%20Nano%20Ceramic!5e0!3m2!1sen!2seg!4v1727532697166!5m2!1sen!2seg',
    madenetNasr:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110511.95243190305!2d31.20043229726563!3d30.051241899999987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583f3288fadc27%3A0x41d2aa0b7dabcc90!2sRoyal%20Nano%20Ceramic!5e0!3m2!1sen!2seg!4v1727532870930!5m2!1sen!2seg',
    zayed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110499.32048832063!2d30.80570569726563!3d30.06256000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14585918ec520d49%3A0xcb17906b46280270!2sRoyal%20Nano%20Ceramic!5e0!3m2!1sen!2seg!4v1727532911778!5m2!1sen!2seg',
    madenetNasr2:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110497.91049591218!2d31.183459397265615!3d30.06382310000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583fe5876e425d%3A0xc5958821be62161!2sRoyal%20Nano%20Ceramic!5e0!3m2!1sen!2seg!4v1727532953061!5m2!1sen!2seg',
  };
  curLocation: string =
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d110616.52923514498!2d30.762201897265626!3d29.957393200000013!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145857a2f9920b5b%3A0x3cc48556389a36b5!2sRoyal%20Nano%20Ceramic!5e0!3m2!1sen!2seg!4v1727532697166!5m2!1sen!2seg';

  changeLocation(src: string) {
    this.curLocation = this.locations[src];
  }
}
