import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



// local components
import { ToolbarComponent } from '../shared/components/toolbar/toolbar.component';
import { SidenavbarComponent } from '../shared/components/sidenavbar/sidenavbar.component';
import { LoginComponent } from '../login/login.component';
import { DashboardComponent } from '../content/dashboard/dashboard.component';
import { AppComponent } from '../app.component';
import { ContentComponent } from '../content/content.component';
import { ProductsComponent } from '../content/products/products.component';
import { ProductlistComponent } from '../content/products/productlist/productlist.component';
import { ProductaddComponent } from '../content/products/productadd/productadd.component';
import { ProductViewComponent } from '../content/products/product-view/product-view.component';
import { ProductEditComponent } from '../content/products/product-edit/product-edit.component';

// other services and guards
import { AuthGuard } from '../shared/guards/auth.guard';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '',   redirectTo: 'home', pathMatch: 'full' },
  { path: 'home',
    component: ContentComponent,
    children: [
      { path: '',   redirectTo: 'dashboard', pathMatch: 'full' },
      {path: 'dashboard', component:DashboardComponent },
      {path: 'products', component:ProductsComponent,
        children: [
          {path: '',   redirectTo: 'list', pathMatch: 'full'},
          {path: 'list', component:ProductlistComponent},
          {path: 'add', component:ProductaddComponent},
          {path: 'edit/:id', component:ProductEditComponent },
          {path: 'view/:id', component:ProductViewComponent},
          // {path: 'list', component:ProductList},
        ]
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
