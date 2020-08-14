import { Directive, ElementRef, HostListener, Renderer2, OnInit } from '@angular/core';
import { element } from 'protractor';
import { Router } from '@angular/router';

@Directive({
  selector: '[appNavItemActive]'
})
export class NavItemActiveDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('click')
  onClick(): void{
    $('.nav').find('.active').removeClass('active');
    this.renderer.addClass(this.el.nativeElement, 'active');
  }

}
