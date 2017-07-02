import { NgModule } from '@angular/core';


import { RouterModule, Routes } from '@angular/router';

import { ToolbarComponent } from '../toolbar/toolbar.component';
import { SidenavbarComponent } from '../sidenavbar/sidenavbar.component';
import { LoginComponent } from '../auth/login/login.component';
import { DashboardComponent } from '../content/dashboard/dashboard.component';
import { AppComponent } from '../app.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  // { path: '',   redirectTo: '', pathMatch: 'full' },
  { path: 'home', component: DashboardComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
