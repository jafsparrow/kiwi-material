import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';

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
  ]
})
export class ContentRoutes {}