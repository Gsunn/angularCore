import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// import { MatDialogModule } from '@angular/material/dialog';
// import { MatIconModule }  from '@angular/material/icon';
// import { MatDividerModule } from '@angular/material/divider';
// import { MatButtonModule } from '@angular/material/button';

import { MatSharedModule } from '../../shared/mat-shared.module'

// import { SettingsComponent } from '../settings/settings.component'

import { DialogLoaderComponent} from './dialog-loader.component';

@NgModule({
  declarations: [
    DialogLoaderComponent
  ],
  imports: [
    CommonModule,
    MatSharedModule
    // MatDialogModule,
    // MatIconModule,
    // MatDividerModule,
    // MatButtonModule,
  ],
  exports:[
    // MatDialogModule
  ],
  entryComponents: [
    // DialogLoaderComponent
  ] //, SettingsComponent
})
export class DialogLoaderModule { }
