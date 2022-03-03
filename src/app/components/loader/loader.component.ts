import { Component, OnInit, Input } from '@angular/core';
import { LoaderService } from './loader.service'
import { Loader } from './loader.model'

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})

export class LoaderComponent implements OnInit {
  
  @Input() public id: string = 'global';
  public show !: boolean;

  constructor(private loaderService: LoaderService) {
  }

  public ngOnInit(): void {
    // this.loaderService.loaderStatus$.subscribe((response: Loader) => {
    //   this.show = this.id === response.id && response.status;
    // });
    this.loaderService.loaderStatus$.subscribe((response: Loader) => {
      if( this.id === response.id ){
        this.show = response.status
      }
      // this.show = this.id === response.id && response.status;
      console.log('SHOW ', this.id + ' ' + this.show)
    });
  }

  // /**
  //  * para demostracion
  //  */
  // public close(): void{
  //   this.loaderService.hideLoader()
  // }

}
