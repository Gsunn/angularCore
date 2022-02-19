import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './services/auth-guard.service'
import { FeaturesComponent } from './features/features.component'


const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    // { path: 'home', canActivate:[AuthGuard], loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },   
    { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
    {
        path: '',
        component: FeaturesComponent,
        children: [
            // { path: 'dashboard',  canActivate:[AuthGuard], loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'audio',  loadChildren: () => import('./features/audio/audio.module').then(m => m.AudioModule) },
            { path: 'dashboard', loadChildren: () => import('./features/dashboard/dashboard.module').then(m => m.DashboardModule) },
            { path: 'engine',  loadChildren: () => import('./features/engine/engine.module').then(m => m.EngineModule) },
            { path: 'home',  loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
            { path: 'user', loadChildren: () => import('./features/user/user.module').then(m => m.UserModule) },
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }