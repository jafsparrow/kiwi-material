import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';
import { ProductcategoriesComponent } from './products/productcategories/productcategories.component';

export const RoutesContent: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: ':id', component: ProductsComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(RoutesContent)
  ],
  exports: [
    RouterModule
  ],
  declarations: [ProductcategoriesComponent]
})
export class ContentRoutes {}
