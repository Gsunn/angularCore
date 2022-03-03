import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Loader } from './loader.model'

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  private loader = new BehaviorSubject<Loader>({id: 'global', status: false})

  loaderStatus$ = this.loader.asObservable()

  constructor() { }

  public mngrLoader(id: string = 'global', status:boolean):void{        
    this.loader.next({id, status})
  }


  public showLoader(id: string = 'global'):void{    
    // console.log(this.loader.value.status);
    this.loader.next({id, status: true})
  }


  public hideLoader(id: string = 'global'):void{
    this.loader.next({id, status: false})
  }
  
}
