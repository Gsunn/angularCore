import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { EngineComponent } from './engine.component';

export const routes = [
  { path: '', component: EngineComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    EngineComponent
  ],
  imports: [
    CommonModule, FlexLayoutModule,
    RouterModule.forChild(routes)
  ]
})
export class EngineModule { }
