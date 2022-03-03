import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSharedModule } from './shared/mat-shared.module'

import { LoginModule } from './login/login.module'
import { LoaderModule } from './components/loader/loader.module';
import { FeaturesModule } from './features/features.module';
// import { DialogLoaderModule } from './components/dialog-loader/dialog-loader.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    HttpClientModule,
    MatSharedModule,
    FeaturesModule,
    LoginModule
  ],
  exports: [LoaderModule, MatSharedModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []  //DialogLoaderModule
})
export class AppModule { }
