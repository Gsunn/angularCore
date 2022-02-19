import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-diaolog-loader',
  templateUrl: './diaolog-loader.component.html',
  styleUrls: ['./diaolog-loader.component.css'],
  // this will allow us to override the mat-dialog-container CSS class
  encapsulation: ViewEncapsulation.None
})
export class DiaologLoaderComponent {

  constructor(
    public dialogRef: MatDialogRef<DiaologLoaderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) 
  { }

  
}
