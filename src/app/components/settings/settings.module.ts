import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSharedModule } from '../../shared/mat-shared.module';

import { SettingsComponent } from './settings.component'


@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule, MatSharedModule
  ]
})
export class SettingsModule { }
