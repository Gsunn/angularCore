import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatSharedModule } from '../shared/mat-shared.module'
import { FeaturesComponent } from './features.component';

import { MenuListItemComponent } from '../features/ui/menu-list-item/menu-list-item.component';
import { PreferenceListItemComponent } from '../features/ui/preference-list-item/preference-list-item.component';

import { DialogLoaderModule } from '../components/dialog-loader/dialog-loader.module';
import { SettingsModule } from '../components/dialog-loader/settings/settings.module';

import { EngineModule } from './engine/engine.module'

export const routes = [
    { path: '', component: FeaturesComponent, pathMatch: 'full' }
];

@NgModule({
    declarations: [
        FeaturesComponent, 
        MenuListItemComponent, 
        PreferenceListItemComponent
    ],
  imports: [
      CommonModule, MatSharedModule, 
      EngineModule,
      RouterModule.forChild(routes)
    ],
    entryComponents: [ DialogLoaderModule, SettingsModule]
})
export class FeaturesModule {
    constructor() {
        console.log("Features In module");
    }
}