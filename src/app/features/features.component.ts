// import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';

import { filter, map, Subscription } from 'rxjs';
import { MediaChange, MediaObserver } from "@angular/flex-layout";

import { FormControl } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';

import { NavItem } from './ui/models/nav-item';
import { menu } from './ui/models/menu';

import { PreferenceItem } from './ui/models/preference-item';
import { preferences } from './ui/models/preferences';

import { DialogLoaderService } from '../components/dialog-loader/dialog-loader.service'
import { FullScreenService } from './ui/service/fullScreen.service'

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
 // encapsulation: ViewEncapsulation.None,
})

export class FeaturesComponent implements OnInit, OnDestroy {

  public positionOptions: MatTooltipModule[] = ['left']; // Tooltip postion
  // tslint:disable-next-line:typedef
  public position = new FormControl(this.positionOptions[0]);

  private mediaWatcher$!: Subscription;
  menu: NavItem[] = menu;
  opened: boolean = true;

  preferences: PreferenceItem[] = preferences;
  
  constructor(private media: MediaObserver, 
              private dialogService: DialogLoaderService,
              private fullScreenService: FullScreenService) {

    this.mediaWatcher$ = this.media.asObservable()
      .pipe(
        filter((changes: MediaChange[]) => changes.length > 0),
        map((changes: MediaChange[]) => changes[0])
      ).subscribe((change: MediaChange) => {
        // console.log(change.mqAlias)
        this.handleMediaChange(change)
      })
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {}

  managementAcount(){
    console.log('managementAcount')
  }

  preferenceEventHandlerFunction(valueEmitted: PreferenceItem) {
    console.log('parentEventHandlerFunction', valueEmitted.iconName);
  
    //this.dialog.getModal(`/assets/dialogTemplates/${valueEmitted.iconName}Modal.html`)
    this.dialogService.render(`${valueEmitted.iconName}`)
  }

  // opendDailog(): Observable<boolean> {

  //   opendDailog(){
  //     console.log('opendDailog')
  //     // this.dialog.getModal('/assets/dialogTemplates/testDialog.html')


  //   // const dialogRef = this.dialog.open(DialogLoaderComponent, {
  //   //   width: '26.5rem',
  //   //   data: {
  //   //     dialogTitle: 'Unsaved Changes',
  //   //     dialogMessageLine1: 'You have unsaved changes.',
  //   //     dialogMessageLine2: 'Are you sure you want to leave the page?',
  //   //     yesButtonText: 'Leave this Page',
  //   //     noButtonText: 'Stay on this Page'
  //   //   }
  //   // });

  //   // return dialogRef.afterClosed();
  // }



  private handleMediaChange(mediaChange: MediaChange) {
    if (this.media.isActive('lt-md')) {
      this.opened = false;
    } else {
      this.opened = true;
    }
  }

  ngOnDestroy(): void {
    this.mediaWatcher$.unsubscribe();
  }

  logout() {
    console.log('logout... bye!!')
  }



  /**
   * FULL SCREEN
   */

  fullscreenTogle() {
    this.fullScreenService.togle()
  }

}
