import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductsComponent } from './products/products.component';

import { ProductService } from './products/_service/product.service';

import { ContentRoutes } from './content-route.module';
@NgModule({
  imports: [
    CommonModule,
    ContentRoutes,
  ],
  declarations: [
    DashboardComponent,
    ProductsComponent
  ],
  providers: [
    ProductService,
  ]
})
export class ContentModule { }
