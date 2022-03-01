import { Directive, Input, HostListener, ElementRef } from '@angular/core';
@Directive({
  selector: '[appResize]',
})
export class ResizeHDirective {

  @Input('leftResize') leftElement!: HTMLElement;
  @Input('rightResize') rightElement!: HTMLElement;
  

  grabber: boolean = false;
  width: number = 0;
  widthFlexContanier:number = 0
  direction: string = ""
  oldx: number = 0

  constructor(private el: ElementRef<HTMLElement>) {}

  // @HostListener('window:load', ['$event']) onLoad(){
  //   this.width = window.innerWidth;
  //   this.widthFlexContanier = (document.querySelector('#flex-container') as HTMLElement).offsetWidth
  // }

  // @HostListener('window:resize', ['$event']) onResize() {
  //   this.width = window.innerWidth;
  //   this.widthFlexContanier = (document.querySelector('#flex-container') as HTMLElement).offsetWidth
  // }

  @HostListener('mousedown') onMouseDown() {
    this.grabber = true;
    this.el.nativeElement.classList.add('side-panel');
    this.width = window.innerWidth;
    this.widthFlexContanier = (document.querySelector('#flex-container') as HTMLElement).offsetWidth
    
    document.body.style.cursor = 'col-resize';
    (document.querySelector('#flex-container') as HTMLElement).style.userSelect = 'none';
  }

  @HostListener('window:mouseup') onMouseUp() {
    this.grabber = false;
    this.el.nativeElement.classList.remove('side-panel');
    document.body.style.cursor = 'default';
    (document.querySelector('#flex-container') as HTMLElement).style.userSelect = 'auto';
  }

  @HostListener('window:mousemove', ['$event']) onMouseMove(event: MouseEvent) {

    if (!this.grabber) return
    
    if (event.pageX < this.oldx) {
      this.direction = "left"
      this.leftElement.style.flex = `0 1 ${ ( event.clientX  - (this.width - this.widthFlexContanier) )}px`;
      this.rightElement.style.flex = '1 1 auto'
    } else if (event.pageX > this.oldx) {
      this.direction = "right"
      this.rightElement.style.flex = `0 1 ${ ( this.width - event.clientX )}px`;
      this.leftElement.style.flex = '1 1 auto'
    }
    this.oldx = event.pageX;
  }
}