import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'
import { MatToolbarModule } from '@angular/material/toolbar';


import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';


import { LoaderModule } from './components/loader/loader.module';
import { FeaturesComponent } from './features/features.component';
import { MenuListItemComponent } from './features/ui/menu-list-item/menu-list-item.component';
import { PreferenceListItemComponent } from './features/ui/preference-list-item/preference-list-item.component';
import { DiaologLoaderComponent } from './components/diaolog-loader/diaolog-loader.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuListItemComponent,
    PreferenceListItemComponent,
    FeaturesComponent,
    DiaologLoaderComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    FlexLayoutModule,
    HttpClientModule,
    // LoaderModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTooltipModule,
    MatMenuModule,
    MatSlideToggleModule
  ],
  exports: [LoaderModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DiaologLoaderComponent]
})
export class AppModule { }
