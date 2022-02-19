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
    this.loaderService.loaderStatus$.subscribe((response: Loader) => {
      this.show = this.id === response.id && response.status;
    });
  }

  // /**
  //  * para demostracion
  //  */
  // public close(): void{
  //   this.loaderService.hideLoader()
  // }

}
