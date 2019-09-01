import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { StationsComponent } from './stations/stations.component';

export const ROUTED_COMPONENTS = [
  LoginComponent,
  NotfoundComponent,
  StationsComponent
];

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'stations', component: StationsComponent },
  { path: '', redirectTo: '/login', pathMatch: "full" },
  { path: '**', component: NotfoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: false, preloadingStrategy: PreloadAllModules})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
