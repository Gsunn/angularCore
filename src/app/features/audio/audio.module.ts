import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AudioComponent } from './audio.component';

import { RouterModule } from '@angular/router';

export const routes = [
  { path: '', component: AudioComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AudioComponent
  ],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class AudioModule { }
