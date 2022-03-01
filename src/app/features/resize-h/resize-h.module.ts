import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ResizeHComponent } from './resize-h.component';
import { ResizeHDirective } from './directives/resize-h.directive';

export const routes = [
  { path: '', component: ResizeHComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    ResizeHComponent,
    ResizeHDirective],
  imports: [
    CommonModule, FlexLayoutModule,
    RouterModule.forChild(routes)
  ]
})
export class ResizeHModule { }
