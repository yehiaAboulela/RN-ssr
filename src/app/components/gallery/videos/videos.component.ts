import { Component } from '@angular/core';
declare var Fancybox: any;

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css',
})
export class VideosComponent {
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
}
