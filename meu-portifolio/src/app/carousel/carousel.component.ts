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
    { src: '../../assets/images/carousel6.png', alt: 'Image 6' },
    { src: '../../assets/images/carousel7.png', alt: 'Image 7' },
    { src: '../../assets/images/carousel8.png', alt: 'Image 8' },
    { src: '../../assets/images/carousel9.png', alt: 'Image 9' },
    { src: '../../assets/images/carousel10.png', alt: 'Image 10'}
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      $('.carousel').slick({
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0',
        focusOnSelect: true,
        variableWidth: true,
        initialSlide: 0,
        rtl: true,  // Rotate carousel from right to left
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });
      
      // Set initial active class
      this.setActiveClass();

      // Update active class on slide change
      $('.carousel').on('afterChange', () => {
        this.setActiveClass();
      });
    }
  }

  setActiveClass() {
    $('.carousel-item').removeClass('active');
    const current = $('.carousel .slick-current');
    current.addClass('active');
  }
}