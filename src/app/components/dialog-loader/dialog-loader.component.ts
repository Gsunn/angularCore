import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { DialogLoaderService } from './dialog-loader.service'


@Component({
  selector: 'app-dialog-loader',
  templateUrl: './dialog-loader.component.html',
  styleUrls: ['./dialog-loader.component.css'],
  // this will allow us to override the mat-dialog-container CSS class
  // encapsulation: ViewEncapsulation.None
})

export class DialogLoaderComponent implements OnInit,  OnDestroy {

  // public components = [SettingsComponent]
  // public currentComponent!: any

  // public dialogContent: any = "";

  constructor(
              @Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<DialogLoaderComponent>,
              // private dialogLoaderService: DialogLoaderService
              ){ }
 
  ngAfterViewChecked(): void {
    console.log(' on view checked')
  }


  ngOnDestroy(): void {
    console.log(' on destroy')
  }

  ngOnInit(): void {
    console.log('on init', this.data)
    // this.dialogLoaderService.projectDescription$.subscribe((response: any) => {
    //    console.log('response dialog-loader --> ', response);
    // //  this.currentComponent = response
    // });
  }
}



export class ModalTestData {
  title: string | undefined;
  content: string | undefined;
  confirmButtonLabel: string | undefined;
  closeButtonLabel: string | undefined;

  constructor(data: ModalTestData) {
    if (data) {
      this.title = data.title;
      this.content = data.content;
      this.confirmButtonLabel = data.confirmButtonLabel;
      this.closeButtonLabel = data.closeButtonLabel;
    }
  }
}
