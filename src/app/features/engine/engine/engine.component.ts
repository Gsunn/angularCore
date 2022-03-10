import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

import { EngineService } from '../engine.service';
// Option 2: Import just the parts you need.
//import { Scene } from  '@angular/core';


@Component({
  selector: 'app-engine',
  templateUrl: './engine.component.html',
  styleUrls: ['./engine.component.css']
})
export class EngineComponent implements OnInit {

  width:number = 0;
  height:number = 0;

  // @HostListener('mousemove', ['$event'])
  @HostListener('click', ['$event'])
  onClick(event: Event) {
   // this.engService3D.onPointerMove(event);
    // this.width = (document.querySelector('.egine-warpper') as HTMLElement).offsetWidth
    // this.height = (document.querySelector('.egine-warpper') as HTMLElement).offsetHeight
    // console.log(this.width + " " +this.height)
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
   //  this.engService3D.resize()
  }

  @ViewChild('renderCanvas', { static: true })
  public canvas!: ElementRef<HTMLCanvasElement>;

  constructor(private engService3D: EngineService) { }

  ngOnInit(): void { }

  ngAfterViewChecked() {
    this.engService3D.createScene(this.canvas)
    this.engService3D.animation()
  }

}
