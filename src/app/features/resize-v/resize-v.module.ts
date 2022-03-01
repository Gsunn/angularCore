import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ResizeVComponent } from './resize-v.component';
import { ResizeVDirective } from './directives/resize-v.directive';


export const routes = [
  { path: '', component: ResizeVComponent, pathMatch: 'full' }
];


@NgModule({
  declarations: [
    ResizeVComponent,
    ResizeVDirective
  ],
  imports: [
    CommonModule,FlexLayoutModule,
    RouterModule.forChild(routes)
  ]
})
export class ResizeVModule { }
