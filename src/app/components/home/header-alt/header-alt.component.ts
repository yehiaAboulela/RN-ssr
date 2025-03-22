import {
  afterNextRender,
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  PLATFORM_ID,
  ViewChild,
} from '@angular/core';
import { LanguageService } from '../../../shared/services/language.service';

@Component({
  selector: 'app-header-alt',
  templateUrl: './header-alt.component.html',
  styleUrl: './header-alt.component.css',
  standalone: false,
})
export class HeaderAltComponent implements OnInit, AfterViewInit {
  constructor(private LanguageService: LanguageService) {
    afterNextRender(() => {
      const videoElement = this.bgVideo.nativeElement;
      videoElement.play(); // Plays the video
      videoElement.muted = true;
    });
  }
  @ViewChild('bgVideo', { static: false })
  bgVideo!: ElementRef<HTMLVideoElement>;

  lang: string = 'en';
  ngOnInit(): void {
    this.LanguageService.lang.subscribe({
      next: (data) => {
        this.lang = data;
      },
    });
  }

  ngAfterViewInit(): void {}
}
