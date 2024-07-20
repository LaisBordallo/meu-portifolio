import { Component } from '@angular/core';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-carousel',
  standalone: true,
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  imports: [SlickCarouselModule]
})
export class CarouselComponent {
  images = [
    { src: 'assets/images/carousel1.jpg', alt: 'Image 1' },
    { src: 'assets/images/carousel2.jpg', alt: 'Image 2' },
    { src: 'assets/images/carousel3.jpg', alt: 'Image 3' },
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000
  };
}