import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoaderService } from '../../components/loader/loader.service'

@Component({
  selector: 'app-resize',
  templateUrl: './resize-h.component.html',
  styleUrls: ['./resize-h.component.css']
})
export class ResizeHComponent implements OnInit {

  // @ViewChild('warp') elementView !: ElementRef; 

  constructor(private loaderService: LoaderService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // console.log(this.elementView.nativeElement.offsetWidth);
    this.loaderService.mngrLoader('global', true)
  }

  showLoader(type :string){
    console.log('Resize showloader ', type)
    this.loaderService.showLoader(type)

    setTimeout(() =>{
      this.loaderService.hideLoader(type)
    },2000)

  }



}
