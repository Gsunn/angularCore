import { Injectable, TemplateRef, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';

import { DialogLoaderComponent } from './dialog-loader.component';
import { SettingsComponent } from '../settings/settings.component';

@Injectable({
  providedIn: 'root'
})
export class DialogLoaderService {

  // @ViewChild('currentComponent')
  // currentComponent!: MatDialogRef<any>

 // private loader = new BehaviorSubject<any>({})
 // projectDescription$ = this.loader.asObservable()

  dialogContent: any;

  constructor(public dialog: MatDialog,
    private http: HttpClient,
    private readonly sanitizer: DomSanitizer) { }

  openInfoModal() { console.log('open info modal') }


  // public getModal(path: string): Observable<any> {
  public getModal(path: string) {

    console.log('getModal ', path)

    this.http
      .get(path,
        { responseType: 'text' })
      .subscribe(data => {

        this.dialogContent = this.sanitizer.bypassSecurityTrustHtml(data);
        //this.dialogContent = dato
       // this.loader.next(this.dialogContent)

        // console.log(this.projectDescription)

        const dialogRef = this.dialog.open(DialogLoaderComponent, {
           width: '50%',
           height: '20%',
          //data
        })

        dialogRef.afterClosed().subscribe(result => {
          console.log('After Close Modal', result);
        });

      });

    // const headers = new HttpHeaders({
    //   'Content-Type':  'text/plain',
    // });

    //return
    //  this.http.get(path, {
    //   headers,
    //   responseType: 'text'
    // }).pipe(
    //   // This is unsafe if the path and content is not under your control
    //   map(html => {
    //     this.sanitizer.bypassSecurityTrustHtml(html)
    //   })
    // );

  }

  public render(component: any) {
    console.log('render ', component);

    // return () =>
    // import('../settings/settings.module').then(
    //   m => m.SettingsModule
    // );
 
   // component = import('../settings/settings.component').then(m =>{ console.log(m); m.SettingsComponent})
 

    const dialogRef = this.dialog.open(SettingsComponent, {
      // width: '80%',
      // height: '80%',
      panelClass: 'myDialogSettings',
      data:  { component: SettingsComponent  }
    })

    dialogRef.afterClosed().subscribe(result => {
      console.log('After Close Modal', result);
    });
  //  this.loader.next(component)

  }

}


