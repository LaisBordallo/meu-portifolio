import { Component, Inject, AfterViewInit, PLATFORM_ID, NgModule } from '@angular/core';
import { isPlatformBrowser, CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ngxSlickItem]'
})
export class SlickItemDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
}

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  imports: [CommonModule, SlickCarouselModule, BrowserModule]
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
    { src: '../../assets/images/carousel10.png', alt: 'Image 10' }
  ];

  slideConfig = {
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    infinite: true,
    dots: true,
    focusOnSelect: true,
    variableWidth: true,
    rtl: true  
  };

  constructor(@Inject(PLATFORM_ID) private platformId: any) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      console.log('Browser rendering');
    }
  }
}

@NgModule({
  declarations: [SlickItemDirective],
  exports: [CarouselComponent, SlickItemDirective],
  imports: [CommonModule, BrowserModule, SlickCarouselModule]
})
export class CarouselModule {}