import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MaterialDesignModule } from '../../material-design.module';


import { ProductsComponent } from './products.component';
import { ProductaddComponent } from './productadd/productadd.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductcategoriesComponent } from './productcategories/productcategories.component';
import { CategoryComponent } from './productcategories/category/category.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductEditComponent } from './product-edit/product-edit.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialDesignModule,
    FormsModule,
    FlexLayoutModule,
  ],
  declarations: [
    ProductsComponent,
    ProductcategoriesComponent,
    ProductaddComponent,
    ProductlistComponent,
    CategoryComponent,
    ProductViewComponent,
    ProductEditComponent
  ],
  exports: [
    ProductsComponent,
    ProductcategoriesComponent,
    ProductaddComponent,
    ProductlistComponent,
    CategoryComponent,
    ProductViewComponent,
    ProductEditComponent
  ]
})
export class ProductsModule { }
