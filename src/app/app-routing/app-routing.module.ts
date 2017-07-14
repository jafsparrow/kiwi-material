import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// local components
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { SidenavbarComponent } from '../sidenavbar/sidenavbar.component';
import { LoginComponent } from '../auth/login/login.component';
import { DashboardComponent } from '../content/dashboard/dashboard.component';
import { AppComponent } from '../app.component';
import { ContentComponent } from '../content/content.component';
import { ProductsComponent } from '../content/products/products.component';

// other services and guards
import { AuthGuard } from '../auth/_guard/auth.guard';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',
    component: ContentComponent,
    children: [
      { path: '',   redirectTo: 'dashboard', pathMatch: 'full' },
      {path: 'dashboard', component:DashboardComponent },
      {path: 'products', component:ProductsComponent
        // children: [
        //   {path: '',   redirectTo: 'list', pathMatch: 'full'},
        //   {path: 'list', component:ProductList},
        //   {path: 'product/:id', component:ProductList},
        //   {path: 'product/:id/edit', component:ProductList},
        //   {path: 'id/:id/delete', component:ProductList},
        //   {path: 'list', component:ProductList},
        // ]
      },

    ],
    canActivate: [
          AuthGuard
        ],

  },
  { path: 'test', component: ContentComponent }
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
