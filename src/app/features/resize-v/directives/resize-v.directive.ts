import { Directive, Input, HostListener, ElementRef } from '@angular/core';
@Directive({
  selector: '[appResize]',
})

export class ResizeVDirective {

  @Input('topResize') topElement!: HTMLElement;
  @Input('bottomResize') bottomElement!: HTMLElement;

  grabber: boolean = false;
  height: number = 0;
  toolBarHeight:number = 0
  // direction: string = ""
  oldy: number = 0

  constructor(private el: ElementRef<HTMLElement>) { }
  @HostListener('mousedown') onMouseDown() {
    this.grabber = true;
    this.el.nativeElement.classList.add('side-panel');
    this.height = window.innerHeight;
    this.toolBarHeight = (document.querySelector('.mat-toolbar') as HTMLElement).offsetHeight
  
    document.body.style.cursor = 'row-resize';
    (document.querySelector('#flex-container') as HTMLElement).style.userSelect = 'none';
  }

  @HostListener('window:mouseup') onMouseUp() {
    this.grabber = false;
    this.el.nativeElement.classList.remove('side-panel');
    document.body.style.cursor = 'default';
    (document.querySelector('#flex-container') as HTMLElement).style.userSelect = 'auto';
  }

  @HostListener('window:mousemove', ['$event']) onMouseMove(event: MouseEvent) {
    // console.log(event.clientY)
    if (!this.grabber) return
    
    if (event.pageY < this.oldy) {
      // this.direction = "top"
      this.topElement.style.flex = `0 1 ${ ( event.clientY - ( this.toolBarHeight)) }px`;
      this.bottomElement.style.flex = '1 1 auto'
    } else if (event.pageY > this.oldy) {
      // this.direction = "bottom"
      this.bottomElement.style.flex = `0 1 ${ ( this.height - event.clientY )}px`;
      this.topElement.style.flex = '1 1 auto'
    }
    this.oldy = event.pageY;
  }
}
