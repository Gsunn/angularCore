import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { DashboardComponent } from './dashboard.component';

export const routes = [
    { path: '', component: DashboardComponent, pathMatch: 'full' }
];

@NgModule({
    declarations: [
        DashboardComponent
    ],
  imports: [
      CommonModule, FlexLayoutModule,
      RouterModule.forChild(routes)
    ]
})
export class DashboardModule {
    constructor() {
        console.log("In module");
    }
}