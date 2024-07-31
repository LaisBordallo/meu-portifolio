import { Component, Inject, AfterViewInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import $ from 'jquery';

@Component({
  selector: 'app-carousel',
  standalone: true,
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  imports: [CommonModule]
})
export class CarouselComponent implements AfterViewInit {
  images = [
    { src: '../../assets/images/carousel1.png', alt: 'Image 1' },
    { src: '../../assets/images/carousel2.png', alt: 'Image 2' },
    { src: '../../assets/images/carousel3.png', alt: 'Image 3' },
    { src: '../../assets/images/carousel4.png', alt: 'Image 4' },
    { src: '../../assets/images/carousel5.png', alt: 'Image 5' },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      // Inicialize o Slick Carousel após a visualização estar pronta
      $('.carousel').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
      });
    }
  }
}