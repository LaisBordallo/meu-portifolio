import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ngxSlickItem]'
})
export class SlickItemDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}
}