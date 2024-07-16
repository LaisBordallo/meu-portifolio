import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  techLogos = [
    {scr: 'assets/img/angular.png', alt: 'Angular logo'},
    {scr: 'assets/img/bootstrap.png', alt: 'Bootstrap logo'},
    {scr: 'assets/img/css.png', alt: 'CSS logo'},
    {scr: 'assets/img/html.png', alt: 'HTML logo'},
    {scr: 'assets/img/javascript.png', alt: 'JavaScript logo'},
    {scr: 'assets/img/typescript.png', alt: 'TypeScript logo'},
  ];

  currentSlide = 0;

  get carouselTransform() {
    return `translateX(-${this.currentSlide * 100}%)`;
  }

  nextSlide() {
    if (this.currentSlide < this.techLogos.length - 1) {
      this.currentSlide++;
    } else {
      this.currentSlide = 0; // Volta para o primeiro slide
    }
  }

  prevSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    } else {
      this.currentSlide = this.techLogos.length - 1; // Vai para o último slide
    }
  }

}
