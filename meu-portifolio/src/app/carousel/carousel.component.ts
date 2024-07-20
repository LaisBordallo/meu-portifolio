import { Component, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import $ from 'jquery';

@Component({
  selector: 'app-carousel',
  standalone: true,
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]  // Adicionando CUSTOM_ELEMENTS_SCHEMA aqui
})
export class CarouselComponent implements AfterViewInit {
  images = [
    { src: 'assets/images/carousel1.png', alt: 'Image 1' },
    { src: 'assets/images/carousel2.png', alt: 'Image 2' },
    { src: 'assets/images/carousel3.png', alt: 'Image 3' },
    { src: 'assets/images/carousel4.png', alt: 'Image 4' },
    { src: 'assets/images/carousel5.png', alt: 'Image 5' },
  ];

  ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      if ($) {
        console.log('jQuery is loaded');
        ($('.carousel') as any).slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          infinite: true,
          autoplay: true,
          autoplaySpeed: 2000
        });
      } else {
        console.error('jQuery is not loaded');
      }
    }
  } 
}
