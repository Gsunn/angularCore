import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';

export const routes = [
    { path: '', component: HomeComponent }
];

@NgModule({
  declarations: [HomeComponent],
  imports: [
      CommonModule, FlexLayoutModule,
      RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
