import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { LoaderModule } from '../components/loader/loader.module'

export const routes = [
    { path: '', component: LoginComponent }
];


@NgModule({
  declarations: [LoginComponent],
  imports: [
      CommonModule,
      FlexLayoutModule,
      MatIconModule,
      MatInputModule,
      MatButtonModule,
      ReactiveFormsModule,
      LoaderModule,
      RouterModule.forChild(routes)
  ]
})
export class LoginModule { }