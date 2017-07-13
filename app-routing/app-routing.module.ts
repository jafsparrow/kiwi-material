import { NgModule } from '@angular/core';


import { RouterModule, Routes } from '@angular/router';

import { ToolbarComponent } from '../toolbar/toolbar.component';
import { SidenavbarComponent } from '../sidenavbar/sidenavbar.component';
import { LoginComponent } from '../auth/login/login.component';
import { DashboardComponent } from '../content/dashboard/dashboard.component';
import { ContentComponent } from '../content/content.component';
import { AppComponent } from '../app.component';

// Auth Guard.
import { AuthGuard } from '../auth/_guard/auth.guard';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  // { path: '',   redirectTo: '', pathMatch: 'full' },
  { path: 'home', component: DashboardComponent, canActivate: [AuthGuard] }
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
