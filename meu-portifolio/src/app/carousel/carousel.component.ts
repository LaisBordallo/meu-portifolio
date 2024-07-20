import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import $ from 'jquery';  // Importação padrão

@Component({
  selector: 'app-carousel',
  standalone: true,
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  imports: [CommonModule]  // Adicionar CommonModule aqui
})
export class CarouselComponent implements AfterViewInit {
  images = [
    { src: '../../assets/images/carousel1.png', alt: 'Image 1' },
    { src: '../../assets/images/carousel2.png', alt: 'Image 2' },
    { src: '../../assets/images/carousel3.png', alt: 'Image 3' },
    { src: '../../assets/images/carousel4.png', alt: 'Image 4' },
    { src: '../../assets/images/carousel5.png', alt: 'Image 5' },
  ];

  ngAfterViewInit() {
    // Garantir que o jQuery é usado apenas no cliente
    if (typeof window !== 'undefined') {
      ($('.carousel') as any).slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000
      });
    }
  }
}
