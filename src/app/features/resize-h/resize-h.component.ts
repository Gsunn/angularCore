import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-resize',
  templateUrl: './resize-h.component.html',
  styleUrls: ['./resize-h.component.css']
})
export class ResizeHComponent implements OnInit {

  // @ViewChild('warp') elementView !: ElementRef; 

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // console.log(this.elementView.nativeElement.offsetWidth);
    
  }

}
